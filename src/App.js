import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Counter from "./Counter";
import { updateCounter } from "./action";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  let [count, setCount] = useState(0);
  let [timeCounter, setTimeCounter] = useState(null);

  const startTimer = (isResume = false) => {
    if (!isResume) {
      clearInterval(timeCounter);
    }
    if (!timeCounter) {
      timeCounter = setInterval(() => {
        setCount((count) => count + 1);
      }, 100 / 6);
      setTimeCounter(timeCounter);
    }
  };

  const stopTimer = () => {
    console.log(timeCounter);
    clearInterval(timeCounter);
    setTimeCounter(null);
  };

  const resetTimer = () => {
    if (timeCounter) {
      clearInterval(timeCounter);
      setCount((count) => 0);
    }
  };

  useEffect(() => {
    dispatch(updateCounter(count));
  }, [count]);

  return (
    <div className="App">
      <Counter />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={() => startTimer(true)}>Resume</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
