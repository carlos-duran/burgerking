import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="bg-orange-900/40 flex justify-evenly [&>a]:p-2">
      <Link to="/dashboard/menu">Carta</Link>
      <Link to="/dashboard/orders">Pedidos</Link>
      <Link to="/dashboard/products">Productos</Link>
      <Link to="/dashboard/users">Usuarios</Link>
    </nav>
  );
};
