import { useReducer, useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Stepit />
    </div>
  );
}
const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
  // if (action.type === "inc") return state + action.payload;
  // if (action.type === "dec") return state - action.payload;
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
}
function Stepit() {
  // const [count, dispatch] = useReducer(reducer, 0);
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  function handleReset() {
    // setCount(0);
    // setStep(1);
    dispatch({ type: "reset" });
  }
  function inc() {
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc" });
    // setCount((c) => c + step);
  }
  function dec() {
    // dispatch({ type: "dec", payload: -1 });
    dispatch({ type: "dec" });
    // setCount((c) => c - step);
  }
  function stepCount(e) {
    dispatch({ type: "setCount", payload: +e.target.value });
  }
  function definStep(e) {
    dispatch({ type: "setStep", payload: +e.target.value });
  }
  const date = new Date("1 June 2022");
  console.log(date.toDateString());
  date.setDate(date.getDate() + count);
  console.log("count", count);
  console.log(step);
  return (
    <>
      <div>
        <input
          value={step}
          onChange={definStep}
          type="range"
          min={1}
          max={10}
          name="set"
          id="set"
        />
        <label htmlFor="set">Step: {step}</label>
      </div>
      <div>
        <button type="button" onClick={dec}>
          -
        </button>
        <input
          type="text"
          name="set"
          value={count}
          onChange={stepCount}
          id="count"
        />
        <button type="button" onClick={inc}>
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
