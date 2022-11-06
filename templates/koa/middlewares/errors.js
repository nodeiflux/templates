const {
  isClientError,
  isServerError,
  NotFound,
} = require('@curveball/http-errors')
const { parseError } = require('../util/errors')

/** @typedef {import('koa').Context} Context */

/**
 *
 * @param {Context} ctx
 * @param {import('koa').Next} next
 */
async function handleErrors (ctx, next) {
  try {
    await next()
  } catch (err) {
    const error = parseError(err)
    error.instance = ctx.url

    if (isServerError(error)) ctx.log.error(error)
    if (isClientError(error)) ctx.log.trace(error)

    /* propagte error to logger */
    ctx.state.error = error

    ctx.status = error.httpStatus
    ctx.body = {
      title: error.title,
      httpStatus: error.httpStatus,
      instance: error.instance,
      detail: error.detail
    }
    ctx.set('Content-Type', 'application/problem+json; charset=utf-8')
  }
}

/**
 *
 * @param {Context} ctx
 */
async function pageNotFound (ctx, next) {
  await next()
  if (!ctx.body) ctx.throw(new NotFound(`${ctx.url} was not found`))
}

module.exports = {
  handleErrors,
  pageNotFound
}
