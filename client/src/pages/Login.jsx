import { Form, Input, message } from "antd";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { useDispatch } from "react-redux";

import { showLoading, hideLoading } from "../redux/features/alertSlice";

const apiUrl = import.meta.env.VITE_REACT_APP_LOGIN;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (value) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(apiUrl, value);
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login efetuado com sucesso");
        navigate("/user");
      } else {
        message.error("Email ou senha inválidos");
      }
    } catch (error) {
      console.log(error);
      message.error("Algo aconteceu de errado");
    }
  };
  return (
    <>
      <div className="flex fle-col items-center justify-center">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="border border-[#FFEFC7] rounded-md p-7 flex flex-col items-center justify-center"
        >
          <Form.Item
            label={
              <span style={{ color: "#ffffff" }} htmlFor="password">
                Email
              </span>
            }
            name="email"
            rules={[{ required: true }]}
          >
            <Input
              type="text"
              required
              className="border border-[#FFEFC7] rounded-md"
            />
          </Form.Item>
          <Form.Item
            label={
              <span style={{ color: "#ffffff" }} htmlFor="password">
                Senha
              </span>
            }
            name="password"
            rules={[{ required: true }]}
          >
            <Input
              type="password"
              required
              className="border border-[#FFEFC7] rounded-md"
            />
          </Form.Item>
          <Link to="/register">
            <p>
              Não tem uma conta?{" "}
              <span className="text-blue-400">Cadastre-se</span>
            </p>
          </Link>
          <button type="submit" className="text-white border rounded-md p-3">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
