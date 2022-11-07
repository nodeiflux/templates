'use strict'

const { load } = require('ts-dotenv')
const { string } = require('yargs')

const env = load({
  PORT: {
    type: Number,
    default: 3000
  },
  NODE_ENV: {
    type: ['development', 'production'],
    default: 'development'
  },
  LOG_LEVEL: {
    type: ['silent', 'trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    default: 'info'
  },
  MONGO_URI: String
})

module.exports = { env }
