import { Router } from "express";
import CategoriaModel from "../../models/CategoriaModel";
import { Categoria } from "../../interfaces/Categoria.interface";

const CategoriaRouter = Router();

CategoriaRouter.get("/", async (req, res) => {
  const categorias = await CategoriaModel.findAll();

  res.json(categorias);
});

CategoriaRouter.post("/", async (req, res) => {
  const categoria = req.body as Categoria;
  try {
    const carteira = await CategoriaModel.create({
      ...categoria,
      categoria: categoria.categoria.toUpperCase(),
    });

    res.json({ message: `Categoria ${carteira.dataValues.categoria} criada!` });
  } catch (error) {}
});

export default CategoriaRouter;
