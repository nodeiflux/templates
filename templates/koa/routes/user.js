'use strict'

const Router = require('@koa-better-modules/joi-router')
const controller = require('../controllers/user')

/** @type {Router.Router} */
const router = new Router()

router.prefix('/user')
router.get('/', controller.listAll)

module.exports = router.middleware()
