/* eslint-disable react/prop-types */
import { store } from "@/store/app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={5000} />
        {children}
      </BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
