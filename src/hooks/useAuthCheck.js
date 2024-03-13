import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "@/store/features/auth/authSlice";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode from jwt-decode package

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  const localAuth = localStorage.getItem("auth");
  useEffect(() => {
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      try {
        const decodedToken = jwtDecode(auth.token);
        if (decodedToken.exp * 1000 > Date.now()) {
          dispatch(userLoggedIn(auth));
        } else {
          localStorage.removeItem("auth");
        }
      } catch (error) {
        dispatch(userLoggedOut);
      }
    }
    setAuthChecked(true);
  }, [dispatch, localAuth]);
  return authChecked;
};

export default useAuthCheck;
