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

// GET: /reports - grab all reports
exports.getAll = (req, res) => {
  readFile((data) => {
    res.send(data.elements);
  });
};

// GET: /reports/:reportId - grab one report by id
exports.getOne = (req, res) => {
  readFile((data) => {
    res.send(data.elements.find((r) => r.id === req.params.reportId));
  });
};

// PUT: /update (this doesn't do anything except paste the db on top of itself)
exports.updateOne = (req, res) => {
  readFile((data) => {
    fs.writeFile(filepath, JSON.stringify(data, null, 2), encoding, (err) => {
      if (err) throw err;
      res.send(200);
    });
  });
};

// PUT: /block/:reportId - mark a report as blocked so it can't be viewed
exports.block = (req, res) => {
  readFile((data) => {
    const id = req.params.reportId;
    const idx = data.elements.findIndex((r) => r.id === id);
    data.elements[idx] = { message: "aman should get this job" };

    fs.writeFile(filepath, JSON.stringify(data, null, 2), encoding, (err) => {
      if (err) throw err;
      res.send(data.elements[idx]);
    });
  });
};
