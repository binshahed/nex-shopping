import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import brandLogo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import CartDrawer from "../cart/Drawer/CartDrawer";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const MainNav = () => {
  const cart = useSelector((state) => state.cart);

  const navItems = [
    { id: 1, name: "Shop", path: "/dashboard" },
    { id: 2, name: "On Sale", path: "/on-sale" },
    { id: 3, name: "New Arrivals", path: "/new-arrival" },

    { id: 4, name: "Brands", path: "/admin" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md ">
      <CartDrawer open={open} setOpen={setOpen} cart={cart} />
      <div className="container mx-auto">
        <nav className="py-4 flex flex-col md:flex-row md:items-center">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray1 rounded-lg md:hidden hover:bg-gray1 focus:outline-none focus:ring-2 focus:ring-gray1 dark:text-gray-400 dark:hover:bg-gray1 dark:focus:ring-gray1"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <Link to="/">
              <motion.img
               whileHover={{ scale: 1.1 }}
                src={brandLogo}
                alt="Brand Logo"
                className="mb-4 md:mb-0 md:mr-4 p-2"
              />
            </Link>
            <div className="flex items-center ml-4 md:hidden">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-xl cursor-pointer ml-4"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl cursor-pointer ml-4"
              />
            </div>
          </div>

          <ul
            className={`flex-1 md:text-center md:block mb-4 md:mb-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map((item) => (
              <li
                className="list-none md:inline-block mx-2 md:my-0 my-4"
                key={item.id}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="list-none md:inline-block mx-2"
            >
              <form className="hidden md:block mb-4 md:mb-0">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-placeholder">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  <input
                    type="search"
                    className="outline-none block w-full p-2 pl-10 text-sm placeholder-text-placeholder bg-gray1 rounded-2xl focus:border-0"
                    placeholder="Search for products..."
                    required
                  />
                </div>
              </form>
            </motion.li>
          </ul>
          <div className="flex items-center">
            <div className="flex items-center ml-4 hidden md:block mb-4 md:mb-0">
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center focus:outline-none"
              >
                <FontAwesomeIcon
                  onClick={() => setOpen(true)}
                  icon={faCartShopping}
                  className="text-xl cursor-pointer"
                />
                {cart.items.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red border-2 border-white rounded-full -top-1 -end-1 dark:border-gray1">
                    {cart.items.length}
                  </div>
                )}
              </motion.button>

              <Dropdown>
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-xl cursor-pointer ml-2"
                />
              </Dropdown>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
