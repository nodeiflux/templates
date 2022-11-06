'use strict'

const Logger = require('koa-pino-logger')
const hyperid = require('hyperid')

const genReqId = hyperid()

/**
 * Create logger middleware
 *
 * @param {import('pino').Logger|undefined} logger Pino instance
 * @returns
 */
function createLogMw (logger) {
  return Logger({
    logger,
    genReqId
  })
}

module.exports = {
  createLogMw
}
