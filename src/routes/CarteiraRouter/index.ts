import { Router } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../../infra/database";

const CarteiraRouter = Router();

CarteiraRouter.get("/", async (req, res) => {
  const produtos = await sequelize.query('select * from contas."COMPRA" c;', {
    type: QueryTypes.SELECT,
  });

  res.json({ message: produtos });
});

export default CarteiraRouter;
