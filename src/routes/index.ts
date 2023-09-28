import { Router } from "express";
import CarteiraRouter from "./CarteiraRouter";

const routes = Router();

routes.use("/carteira", CarteiraRouter);

export default routes;
