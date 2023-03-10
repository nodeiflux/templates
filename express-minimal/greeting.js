/*
 * This file represents your api endpoints
 */

const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send({
    message: 'Hello world"'
  })
})

router.get('/:name', (req, res) => {
  res.send({
    message: `Hello ${req.params.name}`
  })
})

module.exports = router
