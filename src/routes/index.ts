import { Router } from "express";
import CarteiraRouter from "./CarteiraRouter";
import CategoriaRouter from "./CategoriaRouter";

const routes = Router();

routes.use("/carteira", CarteiraRouter);
routes.use("/categorias", CategoriaRouter);

export default routes;
