import mysql2 from "mysql2/promise";

const conn = mysql2.createPool({
  database: process.env.DATABASE,
  port: process.env.PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD
});

export default conn;
