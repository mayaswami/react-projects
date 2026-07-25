import { useNavigate } from "react-router-dom";
import "../css/PagesBtn.css";

function Orders() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Orders Page</h1>
      <p>Review your recent orders here.</p>
      <div className="buttons">
        <button onClick={() => navigate(-1)}>⬅ Back</button>

        <button onClick={() => navigate("/dashboard/profile")}>
          Go to Profile
        </button>
      </div>
    </div>
  );
}
export default Orders;
