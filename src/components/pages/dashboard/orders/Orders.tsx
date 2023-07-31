import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Orders = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.orders.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return <div>Orders</div>;
};
