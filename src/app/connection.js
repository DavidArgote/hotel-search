const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "HOTEL",
  password: "123456789",
  database: "hotel",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = conn;
