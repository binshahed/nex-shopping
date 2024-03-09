import { Route, Routes } from "react-router-dom";
import HomePage from "@/Page/Home/HomePage";
import ProductDetailPage from "@/Page/ProductDetail/ProductDetailPage";

import Footer from "@/features/footer/Footer";
import CartPage from "@/Page/CartPage/CartPage";
import SignIn from "@/Page/SignIn/SignInPage";
import SignUp from "@/Page/SignUp/SignUp";
import AddProduct from "@/Page/admin/AddProduct/AddProduct";
import useAuthCheck from "@/hooks/useAuthCheck";
import Spinner from "@/components/global/Spinner";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";
import AddBrand from "@/Page/admin/AddBrand/AddBrand";

const AppRouter = () => {
  const authCheck = useAuthCheck();
  return (
    <main className="overflow-hidden relative">
      {!authCheck ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/addProduct"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AddBrand />
              </AdminRoute>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/*" element={<div>page not found</div>} />
        </Routes>
      )}
      <Footer />
    </main>
  );
};

export default AppRouter;
