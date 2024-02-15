const FII = { id: 1, tipoAtivo: "FII", papel: "PAPEL", tijolo: "TIJOLO" },
  ACAO = { id: 2, tipoAtivo: "ACAO" },
  RF = {
    id: 3,
    tipoAtivo: "RF",
    cra: "CRA",
    cri: "CRI",
    deb: "DEBENTURE",
    cdb: "CDB",
  };

class Pergunta {
  static ID = 1;
  constructor({ pergunta, tipoAtivo, tipo, nivel }) {
    this.id = Pergunta.ID++;
    this.pergunta = pergunta;
    this.tipoAtivo = tipoAtivo;
    this.tipo = tipo ?? null;
    this.nivel = nivel;
  }
}

class Ativo {
  static ID = 1;
  constructor({ ticket, tipoAtivo, tipo }) {
    this.id = Ativo.ID++;
    this.ticket = ticket;
    this.tipoAtivo = tipoAtivo;
    this.tipo = tipo;
  }
}

const perguntas = [
  new Pergunta({
    pergunta: "Está com P/VP abaixo de 1,05?",
    tipoAtivo: FII.id,
    tipo: FII.tijolo,
    nivel: 2,
  }),
  new Pergunta({
    pergunta: "Possui mais de 10 imóveis?",
    tipoAtivo: FII.id,
    tipo: FII.tijolo,
    nivel: 2,
  }),
  new Pergunta({
    pergunta: "Liquidez acima de 1mm?",
    tipoAtivo: FII.id,
    nivel: 1,
  }),
  new Pergunta({
    pergunta: "Possui Tag along?",
    tipoAtivo: ACAO.id,
    nivel: 1,
  }),
];

const ativos = [
  new Ativo({ ticket: "BMGB4", tipoAtivo: ACAO.id }),
  new Ativo({ ticket: "XPML11", tipoAtivo: FII.id, tipo: FII.tijolo }),
  new Ativo({ ticket: "XPSF11", tipoAtivo: FII.id, tipo: FII.papel }),
];

ativos.forEach((ativo) => {
  ativo.perguntas = perguntas
    .filter((p) => {
      if (
        (p.tipoAtivo == ativo.tipoAtivo && p.tipo == ativo.tipo) ||
        (p.nivel == 1 && p.tipoAtivo == ativo.tipoAtivo)
      )
        return p;
    })
    .map((p) => ({ pergunta: p.pergunta, resposta: "" }));
});

ativos.forEach((at) => {
  console.log(at);
});
