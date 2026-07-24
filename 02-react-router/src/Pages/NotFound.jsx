import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-content">
      <h1>404</h1>
      <p>Page Not Found</p>
      <NavLink to="/">Go Back Home</NavLink>
    </div>
  );
}

export default NotFound;