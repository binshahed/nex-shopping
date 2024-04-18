import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "@/Page/SignIn/SignInPage";
import SignUp from "@/Page/SignUp/SignUp";
import AddProduct from "@/Page/Dashboard/AddProduct/AddProduct";
import useAuthCheck from "@/hooks/useAuthCheck";
import Spinner from "@/components/global/Spinner";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "@/Page/Dashboard/Dashboard";
import AddBrand from "@/Page/Dashboard/AddBrand/AddBrand";
import ErrorPage from "@/components/global/NotFound/ErrorPage";
import DashboardHome from "@/Page/Dashboard/DashboardHome";
import AddCategory from "@/Page/Dashboard/AddCategory/AddCategory";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "@/Page/OrderPage/OrderPage";
import Filter from "@/Page/filter/FilterPage";
import ProfilePage from "@/Page/Profile/ProfilePage";
// import HomePage from "@/Page/Home/HomePage";
import CartPage from "@/Page/CartPage/CartPage";
import ProductDetailPage from "@/Page/ProductDetail/ProductDetailPage";
import RootRoute from "./RootRoute";
import Nav from "@/features/shared/Nav/Nav";
import SpinnerLg from "@/components/global/SpinnerLg";
// import { lazy } from "react";

const HomePage = lazy(() => import("@/Page/Home/HomePage"));
// const ProductDetailPage = lazy(() =>
//   import("@/Page/ProductDetail/ProductDetailPage")
// );
// const CartPage = lazy(() => import("@/Page/CartPage/CartPage"));

const AppRouter = () => {
  const authCheck = useAuthCheck();

  return (
    <>
      {!authCheck ? (
        <Spinner />
      ) : (
        <Routes>
          {/* public route  */}
          <Route element={<RootRoute />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<SpinnerLg/>}>
                  <HomePage />
                </Suspense>
              }
              errorElement={<ErrorPage />}
            />
            <Route
              path="/filter"
              element={<Filter />}
              errorElement={<ErrorPage />}
            />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>

          {/* private route  */}
          <Route element={<PrivateRoute />}>
            <Route path="/order" element={<OrderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          {/* auth route  */}
          <Route element={<PublicRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* admin route  */}
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="" element={<DashboardHome />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="addBrand" element={<AddBrand />} />
            <Route path="addCategory" element={<AddCategory />} />
            <Route path="*" element={<div>page not found</div>} />
          </Route>
          {/* not found route  */}
          <Route
            path="/*"
            element={
              <div>
                <Nav />
                page not found
              </div>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
