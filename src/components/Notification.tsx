import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification: React.FC = () => {
  return (
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
  );
};

export const notify = (message: string) => {
  toast.success(message);
};

export default Notification;
