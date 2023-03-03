
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const countReset = () => {
    setCount(0);
  };

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("acted!");
    const timer = setInterval(countIncrement, 1000);
    return () => {
      console.log("deleted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <p>current:{count}</p>
      <button onClick={countReset}>RESET</button>
    </div>
  );
};

export default Timer;