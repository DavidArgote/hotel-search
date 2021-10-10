const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.DB_IP || "localhost",
  port: process.env.DB_PORT || 3307,
  user: process.env.DB_USER || "HOTEL",
  password: process.env.DB_PASSWORD || "123456789",
  database: process.env.DB_NAME || "hotel",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = conn;
