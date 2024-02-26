/* eslint-disable react/prop-types */
// Dropdown.js

import { Link } from "react-router-dom";

const Dropdown = ({ children }) => {
  const dropdownItems = [
    { name: "login", to: "/signin" },
    { name: "Item 1", to: "/" },
    { name: "Item 1", to: "/" },
  ];

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        {children}
        <div className="hidden bg-white text-primary group-hover:block absolute z-10 mt-0 w-56 rounded-md shadow-lg ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
