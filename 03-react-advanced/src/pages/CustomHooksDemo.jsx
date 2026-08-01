import useCounter from "../hooks/useCounter";

function CustomHooksDemo() {
  const { count, increment, decrement, reset } = useCounter();
  const counter1 = useCounter();
  const counter2 = useCounter(10);
  return (
    <div>
      <h1>Custom Hooks Demo</h1>

      <h2>Counter 1: {counter1.count}</h2>

      <button onClick={counter1.increment}>+</button>

      <button onClick={counter1.decrement}>-</button>

      <button onClick={counter1.reset}>Reset</button>

      <hr />

      <h2>Counter 2: {counter2.count}</h2>

      <button onClick={counter2.increment}>+</button>
      <button onClick={counter2.decrement}>-</button>

      <button onClick={counter2.reset}>Reset</button>
    </div>
  );
}

export default CustomHooksDemo;
