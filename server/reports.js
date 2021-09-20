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

exports.getOne = (req, res) => {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) throw err;
    dataParsed = JSON.parse(data);
    res.send(dataParsed.elements.find((r) => r.id === req.params.reportId));
  });
};

exports.updateOne = (req, res) => {
  newData = {
    message: "aman should get this job",
  };
  fs.writeFile(JSON.stringify(newData), filepath, encoding, (err) => {
    if (err) throw err;
    res.send(200);
  });
};
