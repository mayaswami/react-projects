import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const [search, setSearch] = useState("");
  const [count2, setCount2] = useState(0);
 
  // Demo 1
  function slowSquare(num) {
    console.log("Calculating Square...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * num;
  }

  const square = useMemo(() => {
    return slowSquare(number);
  }, [number]);

  // Demo 2
  const fruits = ["Apple", "Banana", "Orange", "Pineapple", "Mango", "Grapes", "Strawberry", "Blueberry", "Watermelon", "Papaya"];

  const filteredFruits = useMemo(() => {
    console.log("Filtering Fruits...");

    return fruits.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div>
      <div className="notes">
        <h2>📘 About useMemo</h2>

        <p>
          <strong>Definition:</strong> useMemo remembers the result of a
          calculation so React doesn't perform the same calculation on every
          render.
        </p>

        <p>
          <strong>Why use it?</strong> It improves performance by avoiding
          unnecessary calculations.
        </p>

        <p>
          <strong>When to use it?</strong> Use it for filtering, sorting,
          searching or any expensive calculation.
        </p>

        <p>
          <strong>Key Points:</strong>
        </p>

        <ul>
          <li>Returns a memoized value.</li>
          <li>Uses a dependency array.</li>
          <li>Runs again only when dependencies change.</li>
        </ul>
      </div>

      <hr />

      <h2>👇 Live Demo</h2>
      
      <h1>useMemo Demo</h1>
      <h2>Count: {count}</h2>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <hr />

      <h2>Search Filter Demo</h2>
      <h3>Count: {count2}</h3>
      <button onClick={() => setCount2(count2 + 1)}>Increase Count</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoDemo;
