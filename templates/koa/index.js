'use strict'

const { createServer } = require('./lib/server')
const { env } = require('./lib/env')
const { mountApp } = require('./app')

const logger = require('pino')({
  level: env.LOG_LEVEL
})

async function main () {
  const server = createServer({
    logger
  })
  mountApp(server)

  server.listen(env.PORT, () => {
    logger.info(`Listening on port ${env.PORT}`)
  })
}

main().catch(error => {
  logger.error(error)
  process.exit(1)
})
