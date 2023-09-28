import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "rota / metodo get" });
});

app.use("/api", routes);

const port = process.env.port;

app.listen(port, () => {
  console.debug(`http://localhost:${port}`);
});
