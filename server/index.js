const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 8000;

// Allows us to use JSON as a db
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile();
});

app.listen(port);
console.log(`Check out localhost:${port}`);
