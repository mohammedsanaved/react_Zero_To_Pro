import React from "react";

const Bill = ({ billValue, onBillValue }) => {
  console.log(billValue);
  return (
    <div>
      <label htmlFor="bill">How much was the bill ? </label>
      <input
        type="text"
        id="bill"
        placeholder="Bill Value"
        value={billValue}
        onChange={(e) => onBillValue(+e.target.value)}
      />
    </div>
  );
};

export default Bill;
