import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Suspense, lazy } from "react";
import Loading from "./components/global/Loading";
import AppProvider from "./components/AppProvider";

const Nav = lazy(() => import("@/features/shared/Nav/Nav"));
const AppRouter = lazy(() => import("@/router/AppRouter"));

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<Loading />}>
        <Nav />
        <AppRouter />
      </Suspense>
    </AppProvider>
  );
}

export default App;
