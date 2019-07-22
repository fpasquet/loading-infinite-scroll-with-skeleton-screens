const express = require("express");
const path = require("path");
const app = express();

app.use(require("prerender-node"));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);