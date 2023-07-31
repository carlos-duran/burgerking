import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const PublicRoute = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) return <Navigate to="/" />;

  return <Outlet />;
};
