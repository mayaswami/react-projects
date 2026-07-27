import { useContext } from "react";
import UserContext from "../context/UserContext";
import UserProfile from "../components/UserProfile";
import UserStatus from "../components/UserStatus";

function ContextDemo() {
  const { username, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <>
      <UserProfile />
      <UserStatus />
      <div>
        <h1>Context API Demo</h1>

        <h2>Username: {username}</h2>
        <h2>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h2>

        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default ContextDemo;
