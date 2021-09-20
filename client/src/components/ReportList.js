import React, { useState, useEffect } from "react";
import axios from "axios";

import Report from "./Report";

const path = "http://localhost:8000";

const ReportList = () => {
  // Store all currently open reports in this state variable
  const [_reports, set_reports] = useState([]);

  // Abstract function to pass it down to individual reports
  const getReports = () => {
    axios.get(path + "/reports/").then((res) => {
      set_reports(res.data);
    });
  };

  // Call reports when mounted
  useEffect(() => {
    getReports();
  }, []);

  return (
    <div>
      <h2>Current Reports: {_reports.length}</h2>
      {/* Print out all reports in css styling with data */}
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
