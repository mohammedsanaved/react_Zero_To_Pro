import React from "react";

const ServiceVote = ({ children, percentage, onSelect }) => {
  console.log(percentage);
  return (
    <div>
      <label htmlFor="service">{children}</label>
      <select
        name="servicevote"
        id="vote"
        value={percentage}
        onChange={(e) => onSelect(+e.target.value)}
      >
        <option value="0">Disatisfied 0%</option>
        <option value="5">it was Okay 5%</option>
        <option value="10">it was good 10%</option>
        <option value="20">Absolutly Amazing 20%</option>
      </select>
    </div>
  );
};

export default ServiceVote;
