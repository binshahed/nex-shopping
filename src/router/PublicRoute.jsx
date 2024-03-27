
import Footer from "@/features/footer/Footer";
import Nav from "@/features/shared/Nav/Nav";
import { useAuth } from "@/hooks/useAuth";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoute = () => {
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const isLoggedInUser = useAuth();
  return !isLoggedInUser ? (
    <div className="bg-background">
      <Nav />
      <Outlet />
      <Footer />  
    </div>
  ) : (
    <Navigate to={from} />
  );
};

export default PublicRoute;
