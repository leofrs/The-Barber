import "../styles/Layout-Style.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { message } from "antd";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout efetuado com sucesso");
    navigate("/login");
  };

  const userMenu = [
    {
      id: 1,
      name: "Home",
      path: "/user",
      icon: "fa-solid fa-house",
    },
  ];

  const adminMenu = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      id: 2,
      name: "Agenda",
      path: "/admin/cadastro",
      icon: "fa-solid fa-list",
    },
    {
      id: 3,
      name: "clientes",
      path: "/admin/clients",
      icon: "fa-solid fa-list",
    },
  ];

  const sidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  const chefe = `Seja bem vindo chefe ${user?.name} `;
  const usuario = `Seja bem vindo ${user?.name}`;
  return (
    <>
      <div className="main">
        <div className="layout">
          <h3>{user?.isAdmin ? { chefe } : usuario}</h3>
          <div>
            <div className="menu">
              {sidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={menu.id}>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon} />
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </div>
                );
              })}
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Sair</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
