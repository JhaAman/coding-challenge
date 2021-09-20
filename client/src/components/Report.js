import React from "react";

const Report = ({ id, state, type, message }) => {
  return (
    <div>
      <p>Id: {id}</p>
      <p>State: {state}</p>
      <a href="/">Details</a>
      <div>
        <p>Type: {type}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default Report;
