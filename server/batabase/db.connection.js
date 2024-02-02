import mysql2 from "mysql2/promise";

const conn = mysql2.createPool({
  database: "railway",
  port: "29212",
  host: "viaduct.proxy.rlwy.net",
  user: "root",
  password: "CcaGeG6CH2b1Ba2-h6bfDg6DfCdd32DE",
});

export default conn;
