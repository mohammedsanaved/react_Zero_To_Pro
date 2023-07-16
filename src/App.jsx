import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Stepit />
    </div>
  );
}
function Stepit() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date("1 June 2022");
  console.log(date);
  date.setDate(date.getDate() + count);
  console.log("count", count);
  console.log(step);
  return (
    <>
      <div>
        <input
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          type="range"
          min={1}
          max={50}
          name="set"
          id="set"
        />
        <label htmlFor="set">Step: {step}</label>
      </div>
      <div>
        <button type="button" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          type="text"
          name="set"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          id="count"
        />
        <button type="button" onClick={() => setCount((c) => c + step)}>
          +
        </button>
        <p>
          {count === 0 ? (
            <span>Today is</span>
          ) : count > 0 ? (
            <span>{count} day from today</span>
          ) : (
            <span>{count} days ago from</span>
          )}
        </p>
        <p>{date.toDateString()}</p>
      </div>
      <div>
        <button type="reset" onClick={handleReset}>
          reset
        </button>
      </div>
    </>
  );
}
