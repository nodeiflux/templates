#!/usr/bin/env node
'use strict'

require('dotenv').config()

const app = require('./app')
const routes = require('./routes')
const db = require('./database')

const port = process.env.PORT ?? 8000

async function main () {
  console.log('Application starting')
  const database = await initialiseDatabase(process.env.NODE_ENV, process.env.DB_URI)
  app.load(routes)
    .listen(port, () => {
      console.info(`Application listening on port ${port}`)
    })
    .on('error', error => {
      console.error(error)
    })
}

/**
 * Initialise database for this application.
 * @param {'production'|'test'|'development'} env Node environment
 * @param {string?} dbUri Database uri
 * @returns
 */
function initialiseDatabase (env, dbUri) {
  if (env === 'production') return db.createSQLDatabase(dbUri)
  if (env === 'test') return db.createMemoryDatabase()
  return db.createSQLiteDatabase()
}

if (process.env.NODE_ENV !== 'test') main()

module.exports = {
  main
}
