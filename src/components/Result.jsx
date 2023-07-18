import React from "react";

const Result = ({ billValue, tip }) => {
  return (
    <div>
      <h2>
        You Pay {billValue + tip} (${billValue} + ${tip})
      </h2>
    </div>
  );
};

export default Result;
