import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  makeServer
} from "./server";
import {
  BrowserRouter
} from "react-router-dom";
import {
  AuthProvider,
  TaskProvider,
  TimerProvider,
  ThemeProvider
} from "./context"

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
			<AuthProvider>
        <TaskProvider>
          <TimerProvider>
						<App />
					</TimerProvider>
        </TaskProvider>
			</AuthProvider>
    </ThemeProvider>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
