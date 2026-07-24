import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-layout">
        <DashboardSidebar />

        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
