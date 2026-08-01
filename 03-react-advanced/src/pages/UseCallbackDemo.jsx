import { useCallback, useState } from "react";
import Child from "../components/Child";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <div className="notes">
        <h2>📘 About useCallback</h2>

        <p>
          <strong>Definition:</strong> useCallback remembers a function so React
          doesn't create a new function on every render.
        </p>

        <p>
          <strong>Why use it?</strong> It keeps function references stable and
          helps prevent unnecessary child re-renders.
        </p>

        <p>
          <strong>When to use it?</strong> Use it when passing functions to
          memoized child components or when function recreation affects
          performance.
        </p>

        <p>
          <strong>Key Points:</strong>
        </p>

        <ul>
          <li>Returns a memoized function.</li>
          <li>Uses a dependency array.</li>
          <li>Often used together with React.memo.</li>
        </ul>
      </div>

      <hr />

      <h2>👇 Live Demo</h2>
      
      <h1>useCallback Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <hr />
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;
