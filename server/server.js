const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../client/index.html"));
});

// Below used for bundle.js from webpack
app.use("/build", express.static(path.resolve(__dirname, "../build")));

app.listen(3000);
