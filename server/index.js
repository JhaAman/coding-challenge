const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 8000;
const filepath = "./data/reports.json";
const encoding = "utf-8";

// Allows us to use JSON as a db
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET: all reports using fs.readFile()
app.get("/", (req, res) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
});

app.listen(port);
console.log(`Check out localhost:${port}`);
