import { Router } from "express";

const carteiraRouter = Router();

carteiraRouter.get("/", (req, res) => {
  res.json({ message: "get carteiraRouter" });
});

export default carteiraRouter;
