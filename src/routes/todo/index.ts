import { Router } from "express";
import ctrl from "./controller";

const routes = Router();

routes.get("/list", ctrl.list);
routes.get("/:_id", ctrl.get);
routes.post("/", ctrl.post);
routes.put("/:_id", ctrl.put);
routes.delete("/:_id", ctrl.delete);

export default routes;