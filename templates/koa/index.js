'use strict'

const { createServer } = require('./lib/server')
const { env } = require('./lib/env')
const { mountApp } = require('./app')
const { name } = require('./package.json')

const logger = require('pino')({
  level: env.LOG_LEVEL
})

async function main () {
  const server = createServer({
    logger,
    isDev: env.NODE_ENV === 'development'
  })

  mountApp(server)

  server.listen(env.PORT, () => {
    logger.info({ name }, `Listening on port ${env.PORT}`)
  })
}

main().catch(error => {
  logger.error({ name, err: error })
  process.exit(1)
})
