import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfiguration = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 800,
  pauseOnHover: false,
  hideProgressBar: true,
  draggable: true,
};
export const showToast = (toastType, toastMessage) => {
  switch (toastType) {
    case "SUCCESS":
      toast.success(toastMessage, toastConfiguration);
      break;

    case "ERROR":
      toast.error(toastMessage, toastConfiguration);
      break;

    case "WARNING":
      toast.warn(toastMessage);
      break;

    default:
      toast.success(toastMessage);
  }
};
