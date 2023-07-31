import { Navigate } from "react-router-dom";
import { NAV } from "../../../../constants/nav";
import { useAuth } from "../../../../context/auth";

export const Products = () => {
  const { user } = useAuth();

  // Authorization
  if (!NAV.products.roles.includes(user!.role)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">Products page</div>
    </div>
  );
};
