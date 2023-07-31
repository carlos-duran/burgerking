import { useAuth } from "../../../context/auth";

export const Header = () => {
  const { logout, user } = useAuth();

  return (
    <header className="bg-orange-900/40 px-4 py-2">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div className="text-2xl">BurgerKing</div>
        <div className="flex gap-2">
          <p>{user?.name}</p>
          <button title="Salir" onClick={logout}>
            ➡️
          </button>
        </div>
      </div>
    </header>
  );
};
