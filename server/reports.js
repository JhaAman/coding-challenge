const fs = require("fs");

const filepath = "./data/reports.json";
const encoding = "utf-8";

exports.getAll = (req, res) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    // Send response to insomnia (or client)
    res.send(JSON.parse(data).elements);
  });
};
