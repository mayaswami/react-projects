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
