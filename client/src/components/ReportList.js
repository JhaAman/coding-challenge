import React, { useState, useEffect } from "react";
import Report from "./Report";
import axios from "axios";

const path = "http://localhost:8000";

const ReportList = () => {
  const [_reports, set_reports] = useState(null);

  useEffect(() => {
    axios.get(path + "/reports/").then((res) => {
      set_reports(res.data);
    });
  });

  return (
    <div>
      <h2>Current Reports:</h2>
      <Report />
      <p>
        {_reports.map((r) => {
          return <Report />;
        })}
      </p>
    </div>
  );
};

export default ReportList;
