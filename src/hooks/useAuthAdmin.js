import { userLoggedOut } from "@/store/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

export const useAuthAdmin = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!auth?.token) {
    return false; // Token not found, return false
  }

  try {
    const tokenDecoded = jwtDecode(auth.token);

    if (tokenDecoded.role === "admin") {
      return true;
    }
  } catch (error) {
    dispatch(userLoggedOut());
  }

  return false;
};
