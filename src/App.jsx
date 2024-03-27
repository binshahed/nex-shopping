import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Suspense, lazy } from "react";
import Loading from "./components/global/Loading";
import AppProvider from "./components/AppProvider";

const AppRouter = lazy(() => import("@/router/AppRouter"));

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<Loading />}>
        <AppRouter />
      </Suspense>
    </AppProvider>
  );
}

export default App;
