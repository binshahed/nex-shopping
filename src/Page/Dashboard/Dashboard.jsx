import DashboardSidebar from "@/features/dashboard/DashboardSidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mb-10">
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
