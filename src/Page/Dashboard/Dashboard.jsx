import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  return (
    <div className="mb-10">
      <DashboardNav />
      <div className="grid grid-cols-12">
        <DashboardSidebar />
        <div className="col-span-6 md:col-span-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
