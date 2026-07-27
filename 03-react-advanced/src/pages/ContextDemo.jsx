import { useContext } from "react";
import UserContext from "../context/UserContext";

function ContextDemo() {
  const { user, setUser } = useContext(UserContext);

  function changeName() {
    setUser({
      ...user,
      name: "Ritu",
    });
  }
  return (
    <div>
      <h1>Context API Demo</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default ContextDemo;
