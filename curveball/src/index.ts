import { env } from './env'
import { createApp } from './app'
import { makeLogger } from 'pino-curveball'
import routes from './routes'

async function main (): Promise<void> {
  const app = createApp(routes)
  app.listen(env.PORT)
}

const logger = makeLogger('index')

main()
  .then(() => logger.info('Application running'))
  .catch(error => {
    logger.fatal(new Error('Unhandled error in main()', { cause: error }))
  })
