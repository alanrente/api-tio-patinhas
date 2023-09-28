import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import routes from "./routes";
import { sequelize } from "./infra/database";
const app = express();

app.use(cors());

try {
  sequelize.authenticate().then(() => {
    console.debug("Conectado ao banco");
  });
} catch (error) {
  console.error("Não foi possível conectar ao banco", error);
}

app.get("/", (req, res) => {
  res.json({ message: "rota / metodo get" });
});

app.use("/api", routes);

const port = process.env.port;

app.listen(port, () => {
  console.debug(`http://localhost:${port}`);
});
