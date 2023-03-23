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

/**
 * Synchronise tables in database
 * @param {'production'|'test'|'development'} env Node environment
 * @param {import('sequelize').Sequelize} db Sequelize instance
 * @return {Promise}
 */
function synchroniseDatabase (env, db) {
  if (env === 'production') return db.sync()
  if (env === 'test') return db.sync({ force: true })
  return db.sync({ alter: true })
}

if (process.env.NODE_ENV !== 'test') main()
  .then(() => console.info('Application running'))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

module.exports = {
  main
}
