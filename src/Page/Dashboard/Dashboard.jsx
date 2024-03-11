import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link className="mr-6" to={`addProduct`}>
        App Product
      </Link>
      <Link className="mr-6" to={`addBrand`}>
        Add Brand
      </Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
