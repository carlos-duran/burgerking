import { FC, ReactNode, createContext, useContext, useState } from "react";
import { TUser } from "../types/user";

type TAuthState = {
  loggedIn: boolean;
  user: TUser | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext({} as TAuthState);

const initialToken = localStorage.getItem("auth-token") ?? "";
const initialUserStr = localStorage.getItem("auth-user");
const initialUser = initialUserStr
  ? (JSON.parse(initialUserStr) as TUser)
  : undefined;

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState<TUser | undefined>(initialUser);

  const loggedIn = !!token;

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("auth-token", data.accessToken);
      localStorage.setItem("auth-user", JSON.stringify(data.user));
      setToken(data.accessToken);
      setUser(data.user);
    }
    return response.ok;
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-user");
    setToken("");
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
