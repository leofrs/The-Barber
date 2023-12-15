import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getAllUserController } from "../controllers/adminControllers.js";

export const routerAdmin = express.Router();

routerAdmin.get("/getClients", authMiddleware, getAllUserController);
