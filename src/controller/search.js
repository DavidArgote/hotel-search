const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.render("search", {});
});

module.exports = router;
