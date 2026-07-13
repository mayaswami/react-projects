import { useEffect, useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);

  function logInitialRender() {
    console.log("Component mounted");
  }

  function logCountChange() {
    console.log("Count changed");
  }

  useEffect(() => {
    logInitialRender();
  }, []);

  useEffect(() => {
    logCountChange();
  }, [count]);

  return (
    <>
      <h1>Practicing useEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increase Count
      </button>
    </>
  );
}
export default CounterOne;
