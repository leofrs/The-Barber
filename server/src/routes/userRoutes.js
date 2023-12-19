import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  loginController,
  registerController,
  authController,
  getAllAgendaController,
} from "../controllers/userControllers.js";
import { calendarioController } from "../controllers/calendarioControllers.js";
import { agendamentoController } from "../controllers/agendamentoControllers.js";

export const routerUser = express.Router();

routerUser.post("/login", loginController);

routerUser.post("/register", registerController);

routerUser.post("/getUserData", authMiddleware, authController);

routerUser.post("/agendamento", authMiddleware, agendamentoController);

routerUser.get("/agenda", authMiddleware, getAllAgendaController);

routerUser.get("/calendario", authMiddleware, calendarioController);
