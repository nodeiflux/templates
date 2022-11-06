'use strict'

const { createEnv } = require('neon-env')

const env = createEnv({
  PORT: {
    type: "number",
    default: 3000
  },
  NODE_ENV: {
    type: 'string',
    choices: ['development', 'production'],
    default: 'development'
  },
  LOG_LEVEL: {
    type: 'string',
    choices: ['silent', 'trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    default: 'info'
  }
})

module.exports = { env }
