import { useContext } from "react";
import UserContext from "../context/UserContext";
import UserProfile from "../components/UserProfile";
import UserStatus from "../components/UserStatus";
import ThemeContext from "../context/ThemeContext";
import "../css/InfoBox.css";

function ContextDemo() {
  const { username, isLoggedIn, login, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="notes">
        <h2>📘 About Context API</h2>

        <p>
          <strong>Definition:</strong> Context API lets multiple components
          access the same data without passing props through every intermediate
          component.
        </p>

        <p>
          <strong>Why use it?</strong> It helps solve prop drilling and makes
          shared data easier to manage.
        </p>

        <p>
          <strong>When to use it?</strong> Use it for data that many components
          need, such as user information, theme, language or authentication.
        </p>

        <p>
          <strong>Key Points:</strong>
        </p>

        <ul>
          <li>Avoids prop drilling.</li>
          <li>Creates global shared state.</li>
          <li>Works with createContext, Provider and useContext.</li>
        </ul>
      </div>

      <hr />

      <h2>👇 Live Demo</h2>
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
