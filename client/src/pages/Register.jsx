import { Form, Input, message } from "antd";

import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";

import axios from "axios";

import { useDispatch } from "react-redux";

import { showLoading, hideLoading } from "../redux/features/alertSlice";

const apiUrl = import.meta.env.VITE_REACT_APP_REGISTER;

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onFinishHandler = async (value) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(apiUrl, value);
      dispatch(hideLoading());
      if (res.status === 201) {
        message.success("Cadastro efetuado com sucesso");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Algo de errado aconteceu");
    }
  };
  return (
    <>
      <img src={Logo} alt="" className=" w-full h-[300px]" />
      <div className="flex fle-col items-center justify-center">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="border border-[#FFEFC7] rounded-md p-7 flex flex-col items-center justify-center"
        >
          <Form.Item
            label={
              <span style={{ color: "#FFEFC7" }} htmlFor="password">
                Nome
              </span>
            }
            name="name"
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
              <span style={{ color: "#FFEFC7" }} htmlFor="password">
                Apelido
              </span>
            }
            name="apelido"
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
              <span style={{ color: "#FFEFC7" }} htmlFor="password">
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
              <span style={{ color: "#FFEFC7" }} htmlFor="password">
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
          <p className="text-white cursor-default">
            Já tem uma conta?{" "}
            <Link to="/login">
              <span className="text-[#FFEFC7]">Login</span>
            </Link>
          </p>
          <button type="submit" className="text-white border rounded-md p-3">
            Cadastre-se
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
