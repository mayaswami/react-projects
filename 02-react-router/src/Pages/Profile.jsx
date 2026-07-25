import { useNavigate } from "react-router-dom";
import "../css/PagesBtn.css";

function Profile() {  
  const navigate = useNavigate();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome! Maya</p>
      <div className="buttons">
        <button onClick={() => navigate("/dashboard/settings")}>
          Go to Settings
        </button>

        <button onClick={() => navigate("/dashboard/orders")}>
          Go to Orders
        </button>
      </div>
    </div>
  );
}
export default Profile;
