import mongoose from "mongoose";

const calendarioSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  horarios: { type: [String], required: true },
});

const calendario = mongoose.model("calendarios", calendarioSchema);

export default calendario;
