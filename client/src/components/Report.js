import React from "react";
import "./report.css";

const Report = ({ id, state, type, message }) => {
  return (
    <div className="container">
      <div className="left">
        <p>Id: {id}</p>
        <p>State: {state}</p>
        <a href="#">Details</a>
      </div>
      <div className="middle">
        <p>Type: {type}</p>
        <p>Message: {message}</p>
      </div>
      <div className="right">
        <button>Block</button>
        <button>Resolve</button>
      </div>
    </div>
  );
};

export default Report;
