import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  const newDate = new Date(date.setDate(date.getDate() + count)).toDateString();

  function countDecrement() {
    setCount((s) => s - step);
  }
  function countIncrement() {
    setCount((s) => s + step);
  }
  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="center">
      <div>
        <div className="step">
          {/* <button onClick={stepDecrement}>-</button>
          <p className="stepCount">Steps: {step}</p>
          <button onClick={stepIncrement}>+</button> */}
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <span>{step}</span>
        </div>
        <div className="count">
          <button onClick={countDecrement}>-</button>
          <input
            className="stepCount"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={countIncrement}>+</button>
        </div>
      </div>
      <div className="dateCounter">
        <span>
          {count === 0
            ? `Today is ${newDate}`
            : count > 0
            ? `${count} days from today is ${newDate}`
            : `${Math.abs(count)} days ago was ${newDate}`}
        </span>
      </div>
      <div className="reset">
        {count !== 0 ? <button onClick={reset}>Reset</button> : null}
      </div>
    </div>
  );
}
