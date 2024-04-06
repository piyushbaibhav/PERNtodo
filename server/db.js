// db/db.js

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_URL,
});

export default pool;


// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "kthl8822",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

// module.exports = pool;