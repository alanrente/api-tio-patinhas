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
  },
  { freezeTableName: true }
);

export { CarteiraModel };
