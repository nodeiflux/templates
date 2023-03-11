const express = require('express')
const Router = require('express-promise-router')

function load (routes) {
  const app = express()
  const router = Router()

  router.use('/api', routes)
  router.use((error, req, res, next) => {
    res.status(500).send({
      message: 'An unexpected error has occurred',
      error: {
        message: error.message
      }
    })
  })

  app.use(router)

  return app
}

module.exports = {
  load
}
