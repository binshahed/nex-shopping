import CustomDropdown from "@/components/navbar/CustomDropdown";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/logo.png";

const DashboardNav = () => {
  return (
    <div className="shadow-md ">
      <div className="mx-auto">
        <nav className="py-4 px-10 flex justify-between ">
          <Link to="/">
            <img
              src={brandLogo}
              alt="Brand Logo"
              className="mb-4 md:mb-0 md:mr-4 p-2"
            />
          </Link>

          <div>
            <span className="pr-2">User</span>
            <CustomDropdown />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNav;
