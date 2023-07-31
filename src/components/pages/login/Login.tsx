import { useAuth } from "../../../context/auth";
import { useNotify } from "../../../context/notify";

export const Login = () => {
  const notify = useNotify();
  const { login } = useAuth();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const success = await login(email, password);
      if (success) {
        notify("Bienvenidx!");
      } else {
        notify("Correo o contraseña inválidos");
      }
    } catch (error) {
      notify("No se pudo establecer conexión con el servidor");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div>
        <h1 className="text-3xl mb-4 text-center">Login</h1>

        <form
          onSubmit={onSubmit}
          className="border border-white rounded p-4 max-w-md w-full"
        >
          <label className="block mb-4">
            <span className="block">Correo</span>
            <input
              type="email"
              name="email"
              className="px-4 py-2 bg-transparent border border-white rounded"
            />
          </label>

          <label className="block mb-4">
            <span className="block">Contraseña</span>
            <input
              type="password"
              name="password"
              className="px-4 py-2 bg-transparent border border-white rounded"
            />
          </label>

          <button className="bg-orange-900 px-4 py-2 w-full rounded">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
