import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import carteiraRouter from "./routes/CarteiraRouter";
dotenv.config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "rota / metodo get" });
});

app.use("/carteira", carteiraRouter);

const port = process.env.port;

app.listen(port, () => {
  console.debug(`http://localhost:${port}`);
});
