import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoutes = ({ element: Element }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const location = useLocation();

  return token ? <Element /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export { PrivateRoutes };