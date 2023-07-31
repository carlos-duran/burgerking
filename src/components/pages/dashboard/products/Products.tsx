import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Products = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.products.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return <div>Products</div>;
};
