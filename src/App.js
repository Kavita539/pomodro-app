import "./App.css";
import {
  NavigationRoutes
} from "./routes";
import {
  ToastContainer
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return ( 
    <div className="bg-sky-400 dark:bg-neutral-800 dark:text-white min-h-screen ">
    <NavigationRoutes />
    <ToastContainer />
    </div>
  );
};