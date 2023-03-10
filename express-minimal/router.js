const { Router } = require('express')
const greeting = require('./greeting')

const router = Router()

router.use('/greet', greeting)

module.exports = router
