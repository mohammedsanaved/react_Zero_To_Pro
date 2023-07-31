import { useState } from "react";
import "./App.css";
let stopInterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);
  const StartWatch = () => {
    stopInterval = setInterval(() => {
      setWatch((x) => x + 1);
      setStarted(true);
    }, 1000);
  };
  const StopWatch = () => {
    clearInterval(stopInterval);
    setStarted(false);
  };
  const ResetWatch = () => {
    setWatch(0);
    clearInterval(stopInterval);
    setStarted(false);
  };

  return (
    <>
      <h2>stopWatch</h2>
      <h4>{watch}</h4>

      <button disabled={started} onClick={StartWatch}>
        Start
      </button>
      <button onClick={StopWatch}>Stop</button>
      <button onClick={ResetWatch}>Reset</button>
    </>
  );
}

export default App;
