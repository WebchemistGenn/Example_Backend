import express from "express";
import routes from "routes";

import "./database";

const app = express();

app.use(routes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("run port: 5050");
})