import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";

export const Dashboard = () => {
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
