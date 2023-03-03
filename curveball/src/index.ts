import { env } from './env'

import Graceful from '@ladjs/graceful'
import { makeLogger } from 'pino-curveball'

import { createApp } from './app'
import * as db from './database'

import routes from './routes'

console.log(
  (new Date()).toTimeString().split(' ')[0], /* Time stamp */
  '⚾ @nodeiflux/curveball Starting application'
)

const logger = makeLogger('index')

type GracefulOpts = ConstructorParameters<typeof Graceful>[0]
async function main (): Promise<GracefulOpts> {
  const app = createApp(routes)
  const server = app.listen(env.PORT)

  const customHandlers: Array<() => any> = []
  let mongoUri = env.MONGO_URI
  if (mongoUri === undefined) {
    const mongod = await db.createMemoryServer()
    mongoUri = mongod.getUri()
    customHandlers.push(async () => await mongod.stop())
  }

  const mongoose = await db.createConnection(mongoUri, makeLogger('mongoose'))

  /* Return things for Graceful */
  return {
    servers: [server],
    mongooses: [mongoose],
    logger,
    customHandlers
  }
}

if (env.NODE_ENV !== 'test') {
  let graceful: Graceful
  const onStarted = (opts: GracefulOpts): void => {
    /* This module handles graceful exits */
    graceful = new Graceful(opts)

    graceful.listen()
    logger.info(`Application listening on port ${env.PORT}`)
  }

  const onError = async (error: Error): Promise<void> => {
    logger.fatal(new Error('Unhandled error in main()', { cause: error }))
    if (graceful !== undefined) await graceful.exit(error.message ?? 1)
  }

  main()
    .then(onStarted)
    .catch(onError)
}
