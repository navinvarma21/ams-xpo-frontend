import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../AuthService";

const ProtectedRoute = ({ role, children }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
