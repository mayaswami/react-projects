import { useCallback, useState } from "react";
import Child from "../components/Child";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <h1>useCallback Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <hr />
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;
