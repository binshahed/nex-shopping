
import Footer from "@/features/footer/Footer";
import Nav from "@/features/shared/Nav/Nav";
import { useAuth } from "@/hooks/useAuth";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const isLoggedInUser = useAuth();
  return isLoggedInUser ? (
    <div className="bg-background">
      <Nav />
      
        <Outlet />
     
      <Footer />
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
