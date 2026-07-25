import { useNavigate } from "react-router-dom";
import "../css/PagesBtn.css";

function Settings() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Settings Page</h1>
      <p>Manage your preferences here.</p>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>⬅ Back</button>

        <button onClick={() => navigate("/dashboard/profile")}>
          Go to Profile
        </button>
      </div>
    </div>
  );
}
export default Settings;
