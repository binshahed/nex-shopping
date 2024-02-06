import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/Home/HomePage";
import ProductDetailPage from "./Page/ProductDetail/ProductDetailPage";
import TopNav from "./features/nav/TopNav";
import MainNav from "./features/nav/MainNav";
import Footer from "./features/footer/Footer";
import CartPage from "./Page/CartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <TopNav />
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
