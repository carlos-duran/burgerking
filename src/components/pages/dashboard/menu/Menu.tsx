import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Menu = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.menu.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return <div>Menu page</div>;
};
