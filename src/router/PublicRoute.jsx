/* eslint-disable react/prop-types */
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedInUser = useAuth();
  return !isLoggedInUser ? children : <Navigate to="/" />;
};

export default PublicRoute;
