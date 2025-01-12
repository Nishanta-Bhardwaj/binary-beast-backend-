const express = require("express");

const app = express();

app.get("/test", function (req, res) {
  res.status(200).json("Binary-Beast(Backend)");
});

app.listen(3000);
