import Footer from "@/features/footer/Footer";
import Nav from "@/features/shared/Nav/Nav";
import { Outlet } from "react-router-dom";

const RootRoute = () => {
  return (
    <div className="bg-background">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootRoute;
