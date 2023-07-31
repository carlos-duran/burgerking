import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const Authenticated = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) return <Navigate to="/login" />;

  return <Outlet />;
};
