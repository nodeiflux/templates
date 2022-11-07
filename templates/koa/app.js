const { routes } = require ('./routes')

/**
 * Create and mount the application
 * This composes business logic
 *
 * @param {import('koa')} app
 */
function mountApp (app) {
  app.use(routes.middleware())
}

module.exports = {
  mountApp
}
