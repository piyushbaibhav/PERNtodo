// db/db.js

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "piyush",
  host: "localhost",
  port: 5432,
  database: "PERNtodo",
});

export default pool;
