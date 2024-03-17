import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-4">
        <div className="col-span-1 bg-gray-100 h-screen">
          <NavLink
            exact
            to=""
            className="block p-6 hover:bg-white"
            activeClassName="bg-white"
          >
            Home
          </NavLink>
          <NavLink
            to="addProduct"
            className="block p-6 hover:bg-white"
            activeClassName="bg-white"
          >
            App Product
          </NavLink>
          <NavLink
            to="addBrand"
            className="block p-6 hover:bg-white"
            activeClassName="bg-white"
          >
            Add Brand
          </NavLink>
          <NavLink
            to="addCategory"
            className="block p-6 hover:bg-white"
            activeClassName="bg-white"
          >
            Add Category
          </NavLink>
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
