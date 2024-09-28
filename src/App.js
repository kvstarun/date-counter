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

  function stepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }
  function stepIncrement() {
    setStep((s) => s + 1);
  }

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
          <button onClick={stepDecrement}>-</button>
          <p className="stepCount">Steps: {step}</p>
          <button onClick={stepIncrement}>+</button>
        </div>
        <div className="count">
          <button onClick={countDecrement}>-</button>
          <p className="stepCount">Count: {count}</p>
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
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
