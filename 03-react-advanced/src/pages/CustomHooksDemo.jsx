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
