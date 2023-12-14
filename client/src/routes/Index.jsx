import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import HomeUser from "../pages/user/Home";
import HomeAdmin from "../pages/admin/Home";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<HomeUser />} />
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Index;
