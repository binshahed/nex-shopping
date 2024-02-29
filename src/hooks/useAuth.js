import { useSelector } from "react-redux";

export const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  if (auth?.token && auth?.user) {
    return true;
  } else {
    return false;
  }
};
