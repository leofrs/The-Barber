import calendarioModel from "../models/calendarioModel.js";

export const calendarioController = async () => {
  const hoje = new Date();
  for (let i = 0; i < 30; i++) {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);

    const horarios = ["09:00", "10:00", "14:00", "15:00"];

    await calendarioModel.create({ data, horarios });
  }

  console.log("Disponibilidades adicionadas com sucesso!");
};
