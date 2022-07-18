import "./App.css";
import {
  NavigationRoutes
} from "./routes";
import {
  ToastContainer
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();
	const {
		authState: { token },
	} = useAuth();
	useEffect(() => {
		if (!token || pathname !== "/pomodro") {
			document.title = "Kayyndra";
		}
	}, [token, pathname]);

  return ( 
    <div className="bg-sky-400 dark:bg-neutral-800 dark:text-white min-h-screen ">
    <NavigationRoutes />
    <ToastContainer />
    </div>
  );
};