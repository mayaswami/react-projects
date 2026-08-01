import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useFetch from "../hooks/useFetch";

function CustomHooksDemo() {
  // useCounter hook
  const { count, increment, decrement, reset } = useCounter();
  const counter1 = useCounter();
  const counter2 = useCounter(10);

  // useToggle hook
  const { isOn, toggle } = useToggle();

  // useDocumentTitle hook
  useDocumentTitle("Custom Hooks Demoo");
  
  // useFetch hook
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <div>
      <div className="notes">
        <h2>📘 About Custom Hooks</h2>

        <p>
          <strong>Definition:</strong> A Custom Hook is a reusable function that
          starts with <code>use</code> and lets you share React logic between
          multiple components.
        </p>

        <p>
          <strong>Why use it?</strong> It avoids repeating the same logic and
          keeps your code cleaner and easier to maintain.
        </p>

        <p>
          <strong>When to use it?</strong> Use it whenever multiple components
          need the same stateful logic, such as counters, toggles or API calls.
        </p>

        <p>
          <strong>Key Points:</strong>
        </p>

        <ul>
          <li>Reuses logic, not UI.</li>
          <li>Each hook call has its own independent state.</li>
          <li>
            Must always start with <code>use</code>.
          </li>
        </ul>
      </div>

      <hr />

      <h2>👇 Live Demo</h2>
      
      <h1>Custom Hooks Demo</h1>
      <section>
        {/* useCounter hook */}
        <h2>Counter 1: {counter1.count}</h2>
        <button onClick={counter1.increment}>+</button>
        <button onClick={counter1.decrement}>-</button>
        <button onClick={counter1.reset}>Reset</button>
        <hr />
        <h2>Counter 2: {counter2.count}</h2>
        <button onClick={counter2.increment}>+</button>
        <button onClick={counter2.decrement}>-</button>
        <button onClick={counter2.reset}>Reset</button>
        <hr />
      </section>
      <section>
        {/* useToggle hook */}
        <h2>Toggle Demo</h2>
        <h3>{isOn ? "ON" : "OFF"}</h3>
        <button onClick={toggle}>Toggle</button>
      </section>
      <section>
        {/* useFetch hook */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default CustomHooksDemo;
