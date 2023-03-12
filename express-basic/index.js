#!/usr/bin/env node
'use strict'

require('dotenv').config()

const app = require('./app')
const routes = require('./routes')

const port = process.env.PORT ?? 8000

function main () {
  console.log('Application starting')

  app.load(routes)
    .listen(port, () => {
      console.info(`Application listening on port ${port}`)
    })
    .on('error', error => {
      console.error(error)
    })
}

if (process.env.NODE_ENV !== 'test') main()

module.exports = {
  main
}
