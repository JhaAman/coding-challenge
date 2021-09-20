import React from "react";
import axios from "axios";
import "./report.css"; // styling

const path = "http://localhost:8000";

const Report = ({ id, state, type, message, getReports }) => {
  // Backend call to block, then update dom
  const handleBlock = () => {
    axios.put(path + "/block/" + id).then((res) => {
      getReports();
    });
  };

  // Backend call to resolve, then update dom
  const handleResolve = () => {
    axios.put(path + "/reports/" + id).then((res) => {
      getReports();
    });
  };

  // Style and return a report box
  return (
    <div className="container">
      <div className="left">
        <p>Id: {id}</p>
        <p>State: {state}</p>
        <a href="/">Details</a>
      </div>
      <div className="middle">
        <p>Type: {type}</p>
        <p>Message: {message}</p>
      </div>
      <div className="right">
        <button onClick={handleBlock}>Block</button>
        <button onClick={handleResolve}>Resolve</button>
      </div>
    </div>
  );
};

export default Report;
