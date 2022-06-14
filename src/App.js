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
    <div className = "App" >
    <NavigationRoutes />
    <ToastContainer />
    </div>
  );
};