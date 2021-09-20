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
    // Send response to insomnia (or client)
    res.send(JSON.parse(data).elements);
  });
});

// GET: one report by ID
app.get("/reports/:reportId", (req, res) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    dataParsed = JSON.parse(data);
    res.send(dataParsed.elements.find((r) => r.id === req.params.reportId));
  });
});

app.listen(port);
console.log(`Check out localhost:${port}`);
