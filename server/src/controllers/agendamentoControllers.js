import agendamentoModel from "../models/agendaModel.js";

export const agendamentoController = async (req, res) => {
  try {
    const { data, horario } = req.body;

    if (!data || !horario) {
      return res
        .status(400)
        .json({ error: "Data e horário são obrigatórios." });
    }

    const novoAgendamento = new agendamentoModel({
      data: new Date(data),
      horario: horario,
    });

    await novoAgendamento.save();
    console.log("Agendamento adicionado com sucesso!");
    res.status(201).json({ message: "Agendamento adicionado com sucesso!" });
  } catch (error) {
    console.error("Erro ao adicionar agendamento:", error);
    res.status(500).json({ error: "Erro interno ao adicionar agendamento." });
  }
};
