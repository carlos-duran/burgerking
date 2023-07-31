import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Users = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.users.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">Users page</div>
    </div>
  );
};
