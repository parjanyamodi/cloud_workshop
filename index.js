const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi Modi here!");
});

app.listen(3000, () => {
  console.log("Server started");
});
