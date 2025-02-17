// Update with your config settings.
const dotenv = require('dotenv').config()

module.exports = {

  development:{
    client: 'postgresql',
    connection: process.env.POSTGRES_URL,
    pool:{
      min: 2,
      max: 10
    },
    migrations:{
      tableName: 'knex_migrations'
    }
  },

};
