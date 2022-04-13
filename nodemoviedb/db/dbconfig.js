const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "movie",
  password: "ToThzLdA80xDYp8U0jvN"
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}