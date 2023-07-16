import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("27 June 2024");
  date.setDate(date.getDate() + count);
  console.log(date);
  return (
    <>
      <div className="container">
        <div className="step">
          <button onClick={() => setStep(step - 1)}> - </button>
          <p>Step : {step}</p>
          <button onClick={() => setStep(step + 1)}> + </button>
        </div>
        <div className="count">
          <button onClick={() => setCount(count - step)}> - </button>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + step)}> + </button>
        </div>
        <div className="display">
          <span>
            {count === 0
              ? "Today is "
              : count < 0
              ? `${count} days ago `
              : `${count} days form today `}
          </span>
          <span>{date.toDateString()}</span>
        </div>
      </div>
    </>
  );
}
