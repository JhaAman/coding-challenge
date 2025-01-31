const fs = require("fs");

// Our "DB"
const filepath = "./data/reports.json";
const encoding = "utf-8";

// Helper function that reads files on behalf of endpoints
const readFile = (callback) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    if (!data) return;
    callback(JSON.parse(data));
  });
};

const writeFile = (newData, callback) => {
  fs.writeFile(filepath, JSON.stringify(newData, null, 2), encoding, (err) => {
    if (err) throw err;
    callback();
  });
};

// GET: / - grab all reports
exports.getAll = (req, res) => {
  readFile((data) => {
    res.send(data.elements);
  });
};

// GET: /reports - grab all OPEN reports
exports.getAllOpen = (req, res) => {
  readFile((data) => {
    res.send(data.elements.filter((r) => r.state === "OPEN"));
  });
};

// GET: /reports/:reportId - grab one report by id
exports.getOne = (req, res) => {
  readFile((data) => {
    returnObj = data.elements.find((r) => r.id === req.params.reportId);
    if (!returnObj) res.sendStatus(404);
    res.send(returnObj);
  });
};

// PUT: /update (this doesn't do anything)
exports.updateOne = (req, res) => {
  readFile((data) => {
    writeFile(data, () => {
      res.sendStatus(200);
    });
  });
};

// PUT: /block/:reportId - mark a report as blocked so it can't be viewed
// PUT: /reports/:reportId - mark a report as resolved so my app can't see it
// PUT: /reports/:reportId and /block/:reportId => handles both cases
exports.handle = (req, res, handle) => {
  readFile((data) => {
    const id = req.params.reportId;
    const idx = data.elements.findIndex((r) => r.id === id);
    if (idx === -1) res.sendStatus(404);

    data.elements[idx].state = handle;

    writeFile(data, () => {
      this.getOne(req, res);
    });
  });
};
