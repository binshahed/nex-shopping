// useToast.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
  const showToast = (message, type = "info") => {
    switch (type) {
      case "success":
        toast.success(message,{toastId:message});
        break;
      case "error":
        toast.error(message,{toastId:message});
        break;
      case "warning":
        toast.warning(message,{toastId:message});
        break;
      default:
        toast.info(message,{toastId:message});
    }
  };

  return {
    showToast,
  };
};

export default useToast;
