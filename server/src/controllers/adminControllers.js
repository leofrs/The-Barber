import userModel from "../models/userModel.js";

export const getAllUserController = async (req, res) => {
  try {
    console.log("ola mundo");
    const resUsers = await userModel.find({});

    if (!resUsers || resUsers.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Nenhum usuário encontrado",
      });
    }

    res.status(200).send({
      success: true,
      message: "Dados dos usuários",
      data: resUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Erro ao buscar os usuários",
      error: error.message,
    });
  }
};
