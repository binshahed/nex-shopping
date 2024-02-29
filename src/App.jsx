import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "@/Page/Home/HomePage";
import ProductDetailPage from "@/Page/ProductDetail/ProductDetailPage";
import TopNav from "@/features/nav/TopNav";
import MainNav from "@/features/nav/MainNav";
import Footer from "@/features/footer/Footer";
import CartPage from "@/Page/CartPage/CartPage";
import SignIn from "@/Page/SignIn/SignInPage";
import SignUp from "@/Page/SignUp/SignUp";
import AddProduct from "@/Page/AddProduct";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useAuthCheck from "@/hooks/useAuthCheck";
import PrivateRoute from "@/router/PrivateRoute";
import PublicRoute from "@/router/PublicRoute";
import Spinner from "@/components/global/Spinner";

function App() {
  const authCheck = useAuthCheck();

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <ToastContainer position="top-right" autoClose={5000} />
        <TopNav />
        <MainNav />
        {!authCheck ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/addProduct"
              element={
                <PrivateRoute>
                  <AddProduct />
                </PrivateRoute>
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/*" element={<div>page not found</div>} />
          </Routes>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
