import React from "react";
import { useState } from "react";

const ChildComponent = React.memo(function Child({ name }) {
  console.log("child rendered");

  return <h2>Name: {name}</h2>;
});

function ReactMemoDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ritu");
  return (
    <div>
      <div className="notes">
        <h2>📘 About React.memo</h2>

        <p>
          <strong>Definition:</strong> React.memo remembers a component and
          skips re-rendering it when its props haven't changed.
        </p>

        <p>
          <strong>Why use it?</strong> It improves performance by preventing
          unnecessary child component renders.
        </p>

        <p>
          <strong>When to use it?</strong> Use it for components that receive
          the same props frequently or are expensive to render.
        </p>

        <p>
          <strong>Key Points:</strong>
        </p>

        <ul>
          <li>Memoizes components.</li>
          <li>Compares previous and new props.</li>
          <li>Works best with useCallback.</li>
        </ul>
      </div>

      <hr />

      <h2>👇 Live Demo</h2>
      
      <h1>React Memo Demo</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <hr />
      <ChildComponent name={name} />
      <button onClick={() => setName("Rahul")}>Change Name</button>
    </div>
  );
}

export default ReactMemoDemo;
