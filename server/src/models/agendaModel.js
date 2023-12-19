import mongoose from "mongoose";

const agendamentoSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  horario: { type: String, required: true },
});

const agendamentoModel = mongoose.model("agendamentos", agendamentoSchema);

export default agendamentoModel;
