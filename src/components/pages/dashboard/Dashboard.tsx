import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useAuth } from "../../../context/auth";

export const Dashboard = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) return <Navigate to="/login" />;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Outlet />

      <div className="mt-auto">
        <Nav />
      </div>
    </div>
  );
};
