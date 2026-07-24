import { NavLink } from "react-router-dom";
import "./DashboardSidebar.css";

function DashboardSideBar() {
  return (
    <div className="sidebar">
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <NavLink to="/dashboard/orders">Orders</NavLink>
    </div>
  );
}

export default DashboardSideBar;
