require('dotenv').config()

module.exports ={
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_TEST_HOST,
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DB_PROD_URL',
    // username: process.env.DB__PROD_USERNAME,
    // password: process.env.DB_PROD_PASSWORD,
    // database: process.env.DB_PROD_NAME,
    // host: process.env.DB_PROD_HOST,
    // dialect: "postgres"
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false,
      },
    },
  }
}