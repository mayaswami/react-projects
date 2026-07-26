import { Navigate, useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login({ isLoggedIn, setIsLoggedIn }) {    
  const navigate = useNavigate();
  console.log("Login:", isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/dashboard/profile" replace />;
  }
  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/dashboard/profile");
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <p>Please login to contiune.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
