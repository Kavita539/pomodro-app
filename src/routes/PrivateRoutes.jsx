import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

function PrivateRoutes({ children }) {
	const {
		authState: { token },
	} = useAuth();
	const location = useLocation();
	return token ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { PrivateRoutes };