import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { calendarioController } from "../controllers/calendarioControllers.js";

export const routerCalendario = express.Router();

routerCalendario.get("/calendarios", authMiddleware, calendarioController);
