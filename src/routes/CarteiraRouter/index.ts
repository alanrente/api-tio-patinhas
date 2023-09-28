import { Router } from "express";

const CarteiraRouter = Router();

CarteiraRouter.get("/", (req, res) => {
  res.json({ message: "get carteiraRouter" });
});

export default CarteiraRouter;
