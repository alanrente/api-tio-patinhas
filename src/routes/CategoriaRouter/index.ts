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
    const categoriaCreated = await CategoriaModel.create({
      ...categoria,
      categoria: categoria.categoria.toUpperCase(),
    });

    res.json({
      message: `Categoria ${categoriaCreated.dataValues.categoria} criada!`,
    });
  } catch (error) {}
});

CategoriaRouter.put("/:categoriaId", async (req, res) => {
  const { categoria } = req.body as Categoria;
  const { categoriaId } = req.params;

  try {
    await CategoriaModel.update(
      { categoria: categoria.toUpperCase() },
      { where: { categoriaId: categoriaId } }
    );

    return res
      .status(200)
      .json({ message: `Categoria ${categoriaId} atualizada!` });
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default CategoriaRouter;
