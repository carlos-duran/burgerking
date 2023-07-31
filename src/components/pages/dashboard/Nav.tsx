import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="bg-orange-900/40 flex justify-evenly [&>a]:p-2">
      <Link to="/menu">Carta</Link>
      <Link to="/orders">Pedidos</Link>
      <Link to="/products">Productos</Link>
      <Link to="/users">Usuarios</Link>
    </nav>
  );
};
