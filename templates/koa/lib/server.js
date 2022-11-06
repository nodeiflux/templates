'use strict'

const Koa = require('koa')
const { createLogMw } = require('../middlewares/logger')

/**
 * Create Koa HTTP server
 *
 * @param {({
 *   logger?: import('pino').Logger
 * })} dependencies
 *
 * @returns {Koa} Koa server
 */
function createServer ({
  logger
} = {}) {
  const server = new Koa()

  server.use(createLogMw(logger))

  return server
}

module.exports = {
  createServer
}
