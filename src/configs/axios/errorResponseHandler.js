import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500) message = "Something went wrong";
      else if (error.response.status === 404) message = "Something wrong";
      else message = error.response.data.message;

      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
