import React, { useState } from "react";
import Bill from "./Bill";
import ServiceVote from "./ServiceVote";
import Result from "./Result";
import Reset from "./Reset";

const TipCalc = () => {
  const [bill, setBill] = useState("");

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <>
      <Bill billValue={bill} onBillValue={setBill} />
      <ServiceVote percentage={percentage1} onSelect={setPercentage1}>
        How do you like the service ?
      </ServiceVote>
      <ServiceVote percentage={percentage2} onSelect={setPercentage2}>
        How do your friend like the service ?
      </ServiceVote>
      {bill > 0 && (
        <>
          <Result billValue={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
};

export default TipCalc;
