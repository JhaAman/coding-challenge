const fs = require("fs");

const filepath = "./data/reports.json";
const encoding = "utf-8";

const readFile = (callback) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
};

exports.getAll = (req, res) => {
  readFile((data) => {
    res.send(data.elements);
  });
};

exports.getOne = (req, res) => {
  readFile((data) => {
    res.send(data.elements.find((r) => r.id === req.params.reportId));
  });
};

exports.updateOne = (req, res) => {
  let oldData = [];
  readFile((data) => {
    oldData = data.elements;
    console.log(data);
  });

  // fs.writeFile(filepath, JSON.stringify(oldData), encoding, (err) => {
  //   if (err) throw err;
  //   res.send(200);
  // });
};
