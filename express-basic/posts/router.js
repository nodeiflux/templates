const Router = require('express-promise-router')
const { postController } = require('./controller')

function postRouter (service) {
  console.debug('Registering post router')
  const router = Router()
  const controller = postController(service)

  router.get('/', controller.getAll)

  return router
}

module.exports = postRouter
