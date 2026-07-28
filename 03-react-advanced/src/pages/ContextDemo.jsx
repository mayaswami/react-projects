import { useContext } from "react";
import UserContext from "../context/UserContext";
import UserProfile from "../components/UserProfile";
import UserStatus from "../components/UserStatus";
import ThemeContext from "../context/ThemeContext";

function ContextDemo() {
  const { username, isLoggedIn, login, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <UserProfile />
      <UserStatus />
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#1f2937",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>Context API Demo</h1>

        <h2>Username: {username}</h2>
        <h2>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h2>

        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default ContextDemo;
