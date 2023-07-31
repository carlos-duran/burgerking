import { Navigate } from "react-router-dom";
import { NAV } from "../../../constants/nav";
import { useAuth } from "../../../context/auth";

export const FirstAuthorized = () => {
  const { user } = useAuth();
  const navItems = Object.values(NAV);
  const path = navItems.find((item) => item.roles.includes(user!.role))!.path;
  return <Navigate to={path} />;
};
