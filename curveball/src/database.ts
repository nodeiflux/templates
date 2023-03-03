import { connection, connect } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server-core'

import type { ConnectOptions, Mongoose } from 'mongoose'
import type { Logger } from 'pino'

export async function createConnection (uri: string, logger: Logger, options?: ConnectOptions): Promise<Mongoose> {
  connection.on('error', logger.error)
  connection.on('connected', () => logger.info('connected'))

  const instance = await connect(uri, Object.assign({
    appName: '@nodeiflux curveball'
  } satisfies ConnectOptions, options))

  return instance
}

export async function createMemoryServer (): Promise<MongoMemoryServer> {
  return await MongoMemoryServer.create()
}
