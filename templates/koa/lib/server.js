'use strict'

const Koa = require('koa')
const json = require('koa-json')

const { createLogMw } = require('../middlewares/logger')
const { handleErrors, pageNotFound } = require('../middlewares/errors')

/**
 * Create Koa HTTP server
 *
 * @param {({
 *   logger?: import('pino').Logger,
 *   isDev?: boolean
 * })} dependencies
 *
 * @returns {Koa} Koa server
 */
function createServer ({
  logger,
  isDev
} = {}) {
  const server = new Koa()
  server.use(json({ pretty: isDev, param: 'pretty' }))
  server.use(createLogMw(logger))
  server.use(handleErrors)
  server.use(pageNotFound)
  /* toggle this to silence Koa */
  //server.silent = true

  return server
}

module.exports = {
  createServer
}
