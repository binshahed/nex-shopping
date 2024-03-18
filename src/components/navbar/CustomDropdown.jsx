import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/store/features/auth/authSlice";
import useToast from "@/hooks/useTostMessage";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "flowbite-react";

const CustomDropdown = () => {
  const { showToast } = useToast();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    showToast("logout Success", "success");
  };

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        <span className="cursor-pointer">
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="button"
            className="relative inline-flex items-center  text-sm font-medium text-center focus:outline-none"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl cursor-pointer ml-2"
            />
          </motion.button>
        </span>
      )}
    >
      <Dropdown.Header className="cursor-pointer hover:bg-gray-100">
        {user ? (
          <Link to="/profile">
            <p className="block text-sm">{user?.name}</p>
            <p className="block truncate text-sm font-medium">{user?.email}</p>
          </Link>
        ) : (
          <p className="block text-sm">
            <Link to="/signin">Sign In</Link>
          </p>
        )}
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      {user && (
        <>
          <Dropdown.Divider />
          <Dropdown.Header className="cursor-pointer hover:bg-gray-100">
            <p onClick={handleLogout}>
              <FontAwesomeIcon className="mr-2" icon={faSignOut} /> Sign out
            </p>
          </Dropdown.Header>
        </>
      )}
    </Dropdown>
  );
};

export default CustomDropdown;
