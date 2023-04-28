require("dotenv").config();
const mysql = require("mysql2/promise");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// connection
//   .getConnection()
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = connection;