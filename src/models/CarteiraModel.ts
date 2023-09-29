import { DataTypes } from "sequelize";
import { sequelize } from "../infra/database";
import CategoriaModel from "./CategoriaModel";

const CarteiraModel = sequelize.define(
  "CARTEIRA_TB",
  {
    carteiraId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true,
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

CarteiraModel.belongsTo(CategoriaModel, { foreignKey: "categoria" });

export { CarteiraModel };
