import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>
      Button
      </button>
    </div>
  );
}

export default App;
