import { createContext, useState } from "react";
const UserContext = createContext();

function UserProvider({ children }) {
  const [username, setUsername] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setUsername("Maya");
    setIsLoggedIn(true);
  }
  function logout() {
    setUsername("Guest");
    setIsLoggedIn(false);
  }
  return (
    <UserContext.Provider value={{ username, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };
export default UserContext;
