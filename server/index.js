const express = require("express");
const fs = require("fs");
const cors = require("cors");
const reports = require("./reports");

const app = express();
const port = 8000;

// Allows us to use JSON as a db
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow React to view our data
app.use(cors());

// GET: all reports
app.get("/", (req, res) => {
  reports.getAll(req, res);
});

// GET: all open reports using fs.readFile()
app.get("/reports", (req, res) => {
  reports.getAllOpen(req, res);
});

// GET: one report by ID
app.get("/reports/:reportId", (req, res) => {
  reports.getOne(req, res);
});

// PUT: update one report with a new body
app.put("/update", (req, res) => {
  reports.updateOne(req, res);
});

// PUT: block a report by :reportId
app.put("/block/:reportId", (req, res) => {
  reports.handle(req, res, "BLOCKED");
});

// PUT: resolve a report by :reportId
app.put("/reports/:reportId", (req, res) => {
  reports.handle(req, res, "RESOLVED");
});

app.listen(port);
console.log(`Check out localhost:${port}`);
