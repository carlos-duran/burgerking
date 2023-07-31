import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Users = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.users.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return <div>Users</div>;
};
