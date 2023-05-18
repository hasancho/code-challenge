require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME_DEVELOPMENT,
    password: process.env.POSTGRES_PASSWORD_DEVELOPMENT,
    database: process.env.POSTGRES_DATABASE_DEVELOPMENT,
    host: process.env.POSTGRES_HOST_DEVELOPMENT,
    port: process.env.POSTGRES_PORT_DEVELOPMENT,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.POSTGRES_USERNAME_PRODUCTION,
    password: process.env.POSTGRES_PASSWORD_PRODUCTION,
    database: process.env.POSTGRES_DATABASE_PRODUCTION,
    host: process.env.POSTGRES_HOST_PRODUCTION,
    port: process.env.POSTGRES_PORT_PRODUCTION,
    dialect: 'postgres',
  },
};
