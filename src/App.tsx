import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/pages/dashboard/Dashboard";
import { Login } from "./components/pages/login/Login";
import { Menu } from "./components/pages/dashboard/menu/Menu";
import { Orders } from "./components/pages/dashboard/orders/Orders";
import { Products } from "./components/pages/dashboard/products/Products";
import { Users } from "./components/pages/dashboard/users/Users";
import { NotFound } from "./components/pages/NotFound";
import { NotifyProvider } from "./context/notify";
import { AuthProvider } from "./context/auth";
import { Authenticated } from "./components/pages/Authenticated";
import { NotAuthenticated } from "./components/pages/NotAuthenticated";
import { FirstAuthorized } from "./components/pages/dashboard/FirstAuthorized";

function App() {
  return (
    <div className="bg-black text-white">
      <NotifyProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<NotAuthenticated />}>
                <Route path="login" element={<Login />} />
              </Route>

              <Route element={<Authenticated />}>
                <Route path="" element={<Dashboard />}>
                  <Route path="" element={<FirstAuthorized />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="products" element={<Products />} />
                  <Route path="users" element={<Users />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </NotifyProvider>
    </div>
  );
}

export default App;
