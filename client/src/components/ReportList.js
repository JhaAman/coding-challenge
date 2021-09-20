import React, { useState, useEffect } from "react";
import axios from "axios";

import Report from "./Report";

const path = "http://localhost:8000";

const ReportList = () => {
  const [_reports, set_reports] = useState([]);

  useEffect(() => {
    axios.get(path + "/reports/").then((res) => {
      set_reports(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Current Reports: {_reports.length}</h2>
      <Report />
      {_reports.map((r) => {
        return <Report key={r.id} id={r.id} />;
      })}
    </div>
  );
};

export default ReportList;
