'use strict'

const hyperid = require('hyperid')
const createId = hyperid()
/** @typedef {import('koa').Context} Context */

/**
 * Create logger middleware
 *
 * @param {import('pino').Logger|undefined} logger Pino instance
 * @returns
 */
function createLogMw (logger) {
  /**
   * @param {Context} ctx
   */
  return async function pinoLogger (ctx, next) {
    const finishTiming = timeResponse(ctx)
    const id = requestId(ctx)

    ctx.log = logger?.child({ id })
    ctx.log.info({
      ...requestInfo(ctx),
    }, 'request')

    await next()
    const responseTime = finishTiming(ctx)

    ctx.log.info({
      ...requestInfo(ctx),
      statusCode: ctx.status,
      contentLength: ctx.length,
      responseTime
    }, 'response')
  }

}

/**
 * Extract loggable information from context
 *
 * @param {Context} ctx
 */
function requestInfo (ctx) {
  return {
    ns: 'http',
    method: ctx.method,
    url: ctx.url
  }
}

/**
 *
 * @param {Context} ctx
 */
function timeResponse (ctx) {
  const startAt = process.hrtime()
  return function finishTiming () {
    const diff = process.hrtime(startAt)
    const responseTime = diff[0] * 1e3 + diff[1] * 1e-6 /* convert from precise time */

    ctx.set('X-Response-Time', `${responseTime.toFixed(2)}`)
    return responseTime
  }
}

/**
 *
 * @param {Context} ctx
 */
function requestId (ctx) {
  const id = createId()
  ctx.state.id = id
  ctx.set('X-Request-Id', id)
  return id
}

module.exports = {
  createLogMw
}
