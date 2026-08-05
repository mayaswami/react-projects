import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";
import { changeName } from "../features/user/userSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import { useGetUsersQuery } from "../features/api/apiSlice";
import "../css/ReduxDemo.css";

function ReduxDemo() {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.mode);
  const { data, isLoading, error } = useGetUsersQuery();
  const dispatch = useDispatch();

  const [name, setName] = useState("");

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
        <button onClick={() => dispatch(changeName("Ritu"))}>Change Name</button>
        <button onClick={() => dispatch(changeName("Maya"))}>Reset Name</button>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
        />
        <button onClick={() => dispatch(changeName(name))}>Update Name</button>
      </section>

      <hr />

      <section>
        <h2>Theme: {theme}</h2>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </section>

      <hr />

      <section>
        <h2>Users</h2>

        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong!</p>}
        {data &&
          data.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          ))}
      </section>     
    </div>
  );
}

export default ReduxDemo;
