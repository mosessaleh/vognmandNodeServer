module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        database: 'peppep',
        user:     'root',
        password: 'root'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        tableName: 'maz_users'
      }
    },
    staging: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        database: 'peppep',
        user:     'root',
        password: 'root'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        tableName: 'maz_users'
      }
    },
    production: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        database: 'peppep',
        user:     'root',
        password: 'root'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        tableName: 'maz_users'
      }
    }
  };