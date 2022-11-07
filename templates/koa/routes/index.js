'use strict'

const Router = require('@koa-better-modules/joi-router')

/** @type {Router.Router} */
const routes = new Router()

routes.use(require('./user'))

module.exports = { routes }
