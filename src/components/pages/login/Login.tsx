import { useNotify } from "../../../context/Notify";

export const Login = () => {
  const notify = useNotify();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("/login", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        notify("Bienvenido!");
      } else {
        // correo o contraseña inválidos
      }
    } catch (error) {
      // no se pudo establecer conexión con el servidor
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => notify("Hola mundo cruel!")}>Notify</button>
      <button onClick={() => notify("Hola mundo sad!")}>Notify 2</button>
      <button onClick={() => notify("Hola mundo mal!")}>Notify 3</button>
      <button onClick={() => notify("Hola mundito!")}>Notify 4</button>

      <form onSubmit={onSubmit}>
        <label className="block">
          <span>Correo</span>
          <input type="email" name="email" />
        </label>

        <label className="block">
          <span>Contraseña</span>
          <input type="password" name="password" />
        </label>

        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};
