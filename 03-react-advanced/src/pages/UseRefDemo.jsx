import { useState, useRef } from "react";

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function increaseState() {
    setCount(count + 1);
  }
  
  function increaseRef() {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <div>
      <h1>useRef Demo</h1>
      <h2>State Count: {count}</h2>
      <h2>Ref Count: {countRef.current}</h2>
      <button onClick={increaseState}>Increase State</button>
      <button onClick={increaseRef}>Increase Ref</button>
    </div>
  );
}
export default UseRefDemo;
