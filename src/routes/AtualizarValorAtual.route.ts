import { Router } from "express";
import { CarteiraModel } from "../models/CarteiraModel";
import { Carteira } from "../interfaces/Carteira.interface";
import { alphavantageService } from "../services/alphavantage.service";

const AtualizarValorAtualRoute = Router();

AtualizarValorAtualRoute.post("/", async (req, res) => {
  const lancamentosCarteira: Carteira[] = (await CarteiraModel.findAll({
    where: { status: 2 },
    attributes: ["ticket", "carteiraId"],
  })) as any[];

  for await (const { ticket, carteiraId } of lancamentosCarteira) {
    const valorAtualizado = await alphavantageService({ symbol: ticket });

    if (!valorAtualizado) {
      res.status(500).json({
        message: `Não foi possível atualizar o valor atual do ticket ${ticket}!`,
      });
      break;
    }

    CarteiraModel.update(
      {
        valorAtual: valorAtualizado.lastRefreshedValueClose,
        dataValorAtual: valorAtualizado.lastRefreshedDate,
      },
      { where: { carteiraId } }
    );
  }

  res.json({
    message: `Tickets ${lancamentosCarteira
      .map((item) => item.ticket)
      .reduce((ticketA, ticketB) => `${ticketA}, ${ticketB}`)} atualizado(s)!`,
  });
});

export default AtualizarValorAtualRoute;
