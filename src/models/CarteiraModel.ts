import { DataTypes } from "sequelize";
import { sequelize } from "../infra/database";

const CarteiraModel = sequelize.define(
  "CARTEIRA_TB",
  {
    carteiraId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    valorAtual: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    precoMedio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    valorPatrimonial: {
      type: DataTypes.DECIMAL(10, 2),
    },
    valorPatrimonialAcao: {
      type: DataTypes.DECIMAL(10, 2),
    },
    lucroPorAcao: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  { freezeTableName: true }
);

export { CarteiraModel };
