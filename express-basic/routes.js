const Router = require('express-promise-router')

const postRouter = require('./posts/router')
const postService = require('./posts/service')
const postModel = require('./posts/model')

/**
 * Create app router
 * @param {import('sequelize').Sequelize} db Sequelize instance
 */
function appRouter (db) {
  const router = Router()

  router.get('/', async (req, res) => {
    res.send('Hello world')
  })

  router.use('/posts', postRouter(postService(postModel(db))))

  return router
}

module.exports = appRouter
