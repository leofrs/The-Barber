import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  loginController,
  registerController,
  authController,
} from "../controllers/userControllers.js";

export const routerUser = express.Router();

routerUser.post("/login", loginController);

routerUser.post("/register", registerController);

routerUser.post("/getUserData", authMiddleware, authController);
