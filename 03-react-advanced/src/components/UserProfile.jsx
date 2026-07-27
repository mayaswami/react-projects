import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { username } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Welcome, {username}</h3>
    </div>
  );
}

export default UserProfile;
