const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

//app.use("/", require("./index"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 1000);
