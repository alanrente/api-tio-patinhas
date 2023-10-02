import { Router } from "express";
import CarteiraRouter from "./CarteiraRouter";
import CategoriaRouter from "./CategoriaRouter";
import AtualizarValorAtualRoute from "./atualizarValorAtual.route";

const routes = Router();

routes.use("/carteira", CarteiraRouter);
routes.use("/categorias", CategoriaRouter);
routes.use("/atualizar-valor-atual", AtualizarValorAtualRoute);

export default routes;
