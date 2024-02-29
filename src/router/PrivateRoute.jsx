/* eslint-disable react/prop-types */
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedInUser = useAuth();
  return isLoggedInUser ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
