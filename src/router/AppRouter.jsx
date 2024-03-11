import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "@/features/footer/Footer";

import SignIn from "@/Page/SignIn/SignInPage";
import SignUp from "@/Page/SignUp/SignUp";
import AddProduct from "@/Page/admin/AddProduct/AddProduct";
import useAuthCheck from "@/hooks/useAuthCheck";
import Spinner from "@/components/global/Spinner";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";

import Dashboard from "@/Page/Dashboard/Dashboard";

import AddBrand from "@/Page/admin/AddBrand/AddBrand";
import ErrorPage from "@/components/global/NotFound/ErrorPage";

const HomePage = lazy(() => import("@/Page/Home/HomePage"));
const ProductDetailPage = lazy(() =>
  import("@/Page/ProductDetail/ProductDetailPage")
);
const CartPage = lazy(() => import("@/Page/CartPage/CartPage"));


const AppRouter = () => {
  const authCheck = useAuthCheck();
  return (
    <main className="overflow-hidden relative">
      {!authCheck ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />

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
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route
              path="addProduct"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
            />
            <Route
              path="addBrand"
              element={
                <AdminRoute>
                  <AddBrand />
                </AdminRoute>
              }
            />
          </Route>
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/*" element={<div>page not found</div>} />
        </Routes>
      )}
      <Footer />
    </main>
  );
};

export default AppRouter;
