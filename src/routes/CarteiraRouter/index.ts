import { Router } from "express";
import { CarteiraModel } from "../../models/CarteiraModel";
import { Carteira } from "../../interfaces/Carteira.interface";

const CarteiraRouter = Router();

CarteiraRouter.get("/", async (req, res) => {
  const carteiras = await CarteiraModel.findAll();

  res.json({ carteiras });
}).post("/", async (req, res) => {
  const body = req.body as Carteira;

  if (!body) return res.status(404).json({ message: "Body faltando!" });

  try {
    const carteira = await CarteiraModel.create({
      ...body,
      ticket: body.ticket.toUpperCase(),
    });
    return res.json({ carteira });
  } catch (err: any) {
    return res.status(500).json({ erro: err.message });
  }
});

export default CarteiraRouter;
