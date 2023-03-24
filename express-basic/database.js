const { Sequelize } = require('sequelize')

/**
 * Create in-memory SQLite Database.
 * This is useful when running tests.
 *
 * @returns Promise<SequelizeZ
 */
async function createMemoryDatabase () {
  return createAndConnect('sqlite::memory:')
}

/**
 * Create file backed SQLite database.
 * This is useful during development.
 *
 * @param {string} storage File path for database storage
 * @returns Promise<Sequelize>
 */
async function createSQLiteDatabase (storage = 'database.sqlite') {
  return createAndConnect({
    dialect: 'sqlite',
    storage
  })
}

/**
 * Connect to database.
 * This is used for production deploys.
 *
 * @param {string} uri Connection string for MariaDB, MySQL or Postgres database.
 * @returns
 */
function createSQLDatabase (uri) {
  return createAndConnect(uri)
}

async function createAndConnect (opts) {
  const sequelize = new Sequelize(opts)
  await sequelize.authenticate()

  return sequelize
}

module.exports = {
  createMemoryDatabase,
  createSQLiteDatabase,
  createSQLDatabase
}
