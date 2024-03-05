/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { useAuthAdmin } from "@/hooks/useAuthAdmin";

const AdminRoute = ({ children }) => {
  const isLoggedInUser = useAuthAdmin();
  return isLoggedInUser ? children : <Navigate to="/" />;
};

export default AdminRoute;
