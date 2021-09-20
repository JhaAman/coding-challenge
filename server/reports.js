const fs = require("fs");

// Our "DB"
const filepath = "./data/reports.json";
const encoding = "utf-8";

// Helper function that reads files on behalf of endpoints
const readFile = (callback) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
};

// GET: /reports
exports.getAll = (req, res) => {
  readFile((data) => {
    res.send(data.elements);
  });
};

// GET: /reports/:reportId
exports.getOne = (req, res) => {
  readFile((data) => {
    res.send(data.elements.find((r) => r.id === req.params.reportId));
  });
};

// PUT: /update
exports.updateOne = (req, res) => {
  readFile((data) => {
    fs.writeFile(filepath, JSON.stringify(data, null, 2), encoding, (err) => {
      if (err) throw err;
      res.send(200);
    });
  });
};

exports.block = (req, res) => {
  readFile((data) => {
    const id = req.params.reportId;
    const report = data.elements.filter((r) => r.id === id);
    console.log(report);
  });
};
