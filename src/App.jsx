import { useState } from "react";
import TipCalc from "./components/TipCalc";

function App() {
  const [bill, setBill] = useState(0);
  return (
    <>
      {/* <Bill billValue={bill} setBillValue={setBill} />
      <ServiceVote>
        <label htmlFor="vote">How do you like the service ?</label>
        <select name="servicevote" id="vote">
          <option value="0">Disatisfied 0%</option>
          <option value="5">it was Okay 5%</option>
          <option value="10">it was good 10%</option>
          <option value="20">Absolutly Amazing 20%</option>
        </select>
      </ServiceVote>
      <ServiceVote>
        <label htmlFor="vote">How do your friend like the service ?</label>
        <select name="servicevote" id="vote">
          <option value="0">Disatisfied 0%</option>
          <option value="5">it was Okay 5%</option>
          <option value="10">it was good 10%</option>
          <option value="20">Absolutly Amazing 20%</option>
        </select>
      </ServiceVote>
      <Result /> */}
      <TipCalc />
    </>
  );
}

export default App;
