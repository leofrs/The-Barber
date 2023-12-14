import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) {
      return res
        .status(200)
        .send({ message: "Usúario ja cadastrado", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassowrd = await bcrypt.hash(password, salt);
    req.body.password = hashedPassowrd;
    const newUser = new userModel(req.body);
    await newUser.save();
    res
      .status(201)
      .send({ message: "Registro efetuado com sucesso", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `o ERROR encontrado foi: ${error.message}`,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: `usúario não encontrado`, success: false });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res
        .status(200)
        .send({ message: "Email ou senha invalidos", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .send({ message: "Login efetuado com sucesso", success: true, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Error ao efetuar o login ${error.message}` });
  }
};

export const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "Usúario não encontrado",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Autorização falhou", success: false, error });
  }
};
