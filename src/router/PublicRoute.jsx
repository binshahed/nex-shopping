/* eslint-disable react/prop-types */
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const isLoggedInUser = useAuth();
  return !isLoggedInUser ? children : <Navigate to={from} />;
};

export default PublicRoute;
