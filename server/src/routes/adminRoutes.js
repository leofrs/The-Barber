import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getAllUserController } from "../controllers/adminControllers.js";
import { agendamentoController } from "../controllers/agendamentoControllers.js";

export const routerAdmin = express.Router();

routerAdmin.get("/getClients", authMiddleware, getAllUserController);

routerAdmin.post("/agendamento", authMiddleware, agendamentoController);
