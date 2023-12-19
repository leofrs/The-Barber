import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";

import { routerUser } from "./routes/userRoutes.js";
import { routerAdmin } from "./routes/adminRoutes.js";
import { routerCalendario } from "./routes/Calendario.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/api/user", routerUser);
app.use("/api/admin", routerAdmin);
app.use("/api/calendario", routerCalendario);

app.get("/api/admin", (rep, res) => {
  res.status(200).send("Servidor rodando da porta 8080 parte do adminRoutes");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`.bgGreen.black);
});
