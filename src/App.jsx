import "./App.css";
import TopNav from "@/features/nav/TopNav";
import MainNav from "@/features/nav/MainNav";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} />
      <header className="sticky top-0 z-50">
        <div>
          <TopNav />
          <MainNav />
        </div>
      </header>
      <AppRouter />
    </div>
  );
}

export default App;
