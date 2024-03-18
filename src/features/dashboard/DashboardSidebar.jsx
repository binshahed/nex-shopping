import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="col-span-6 md:col-span-2 bg-gray-200 h-screen">
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
  );
};

export default DashboardSidebar;
