'use strict'

const errors = require('@curveball/http-errors')

/** @typedef {import('@curveball/http-errors').HttpProblem} HttpProblem */
/**
 * @param {unknown} error
 * @return {HttpProblem}
 */
 function parseError (error) {
  if (errors.isHttpProblem(error)) return error
  if (errors.isHttpError(error)) {
    /* TODO: map codes to problems */
  }
  return new errors.InternalServerError('Something went wrong.')
}

module.exports = {
  parseError
}
