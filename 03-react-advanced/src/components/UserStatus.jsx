import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserStatus() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <h2>Status</h2>
      <h3>{isLoggedIn ? "🟢 Logged In" : "🔴 Logged Out"}</h3>
    </div>
  );
}

export default UserStatus;
