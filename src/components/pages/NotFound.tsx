import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="grid place-content-center min-h-screen text-center">
      <h1>La página no existe</h1>
      <Link to="/" className="underline text-sm">
        Volver
      </Link>
    </div>
  );
};
