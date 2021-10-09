const express = require("express");
const path = require("path");
const app = express();

const home = require("./controller/home");
const hotels = require("./controller/hoteles");

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", home);
app.use("/hoteles", hotels);

const server = app.listen(8000, () => {
  console.log(`Listen in http://localhost:${server.address().port}`);
});
