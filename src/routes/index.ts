import { Router } from "express";
import todoRoutes from "./todo";

const routes = Router();

routes.use("/todo", todoRoutes);

routes.get("/", (req, res) => {
  res.send("<h1>TEST</h1>");
});

export default routes;