import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";
import { changeName } from "../features/user/userSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import "../css/ReduxDemo.css";

function ReduxDemo() {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit</h1>
      <section>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </section>

      <hr />

      <section>
        <h2>User Details</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => dispatch(changeName())}>Change Name</button>
      </section>

      <hr />

      <section>
        <h2>Theme: {theme}</h2>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </section>
    </div>
  );
}

export default ReduxDemo;
