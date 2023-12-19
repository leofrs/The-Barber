import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import HomeUser from "../pages/user/Home";
import HomeAdmin from "../pages/admin/Home";

import ProtectedRouter from "../components/ProtectedRouter";
import PublicRouter from "../components/PublicRouter";

import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";

import Agenda from "../pages/user/Agenda";
import Agendamento from "../components/Agendamento";

import Clients from "../pages/admin/Clients";
import AgendaAdmin from "../pages/admin/Agenda";

import CadastroAdmin from "../pages/admin/Cadastro";

const Index = () => {
  const { loading } = useSelector((state) => state.alerts);
  const { user } = useSelector((state) => state.user);
  const Home = user?.isAdmin ? HomeAdmin : HomeUser;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRouter>
                <Register />
              </PublicRouter>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRouter>
                <HomeUser />
              </ProtectedRouter>
            }
          />
          <Route
            path="/user/agenda"
            element={
              <ProtectedRouter>
                <Agenda />
              </ProtectedRouter>
            }
          />
          <Route
            path="/user/agendamento"
            element={
              <ProtectedRouter>
                <Agendamento />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRouter>
                <HomeAdmin />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/clients"
            element={
              <ProtectedRouter>
                <Clients />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/agenda"
            element={
              <ProtectedRouter>
                <AgendaAdmin />
              </ProtectedRouter>
            }
          />
          <Route
            path="/admin/cadastro"
            element={
              <ProtectedRouter>
                <CadastroAdmin />
              </ProtectedRouter>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default Index;
