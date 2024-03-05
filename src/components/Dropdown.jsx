/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "./buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/store/features/auth/authSlice";

const Dropdown = ({ children }) => {
  const dispatch = useDispatch();
  const dropdownItems = [
    { name: "Item 1", to: "/" },
    { name: "Item 1", to: "/" },
  ];

  const store = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  console.log("auth", store.user);

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        {children}
        <div className="hidden bg-white  group-hover:block absolute z-10 mt-0 w-56 rounded-md shadow-lg ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {!store.user && (
              <Link
                to="/signin"
                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-800 hover:bg-gray1"
                role="menuitem"
              >
                Login
              </Link>
            )}
            {store.user && <p className="px-4 py-3 bg-purple text-white cursor-pointer">{store.user.name}</p>}
            {dropdownItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-800 hover:bg-gray1"
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
            {store.user && (
              <Button handleButtonClick={handleLogout}>Logout</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
