import React, { useState, useEffect } from "react";
import axios from "axios";

import Report from "./Report";

const path = "http://localhost:8000";

const ReportList = () => {
  const [_reports, set_reports] = useState([]);

  const getReports = () => {
    axios.get(path + "/reports/").then((res) => {
      set_reports(res.data);
    });
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div>
      <h2>Current Reports: {_reports.length}</h2>
      {_reports.map((r) => {
        return (
          <Report
            key={r.id}
            id={r.id}
            state={r.state}
            type={r.payload.reportType}
            message={r.payload.message}
            getReports={getReports}
          />
        );
      })}
    </div>
  );
};

export default ReportList;
