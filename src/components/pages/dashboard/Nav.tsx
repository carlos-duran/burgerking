import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import { NAV } from "../../../constants/nav";

const items = Object.values(NAV);

export const Nav = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-orange-900/40 flex justify-evenly [&>a]:p-2">
      {items
        .filter((item) => item.roles.includes(user!.role))
        .map((item) => (
          <Link key={item.path} to={item.path}>
            {item.text}
          </Link>
        ))}
    </nav>
  );
};
