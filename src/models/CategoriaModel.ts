import { DataTypes } from "sequelize";
import { sequelize } from "../infra/database";
import { CarteiraModel } from "./CarteiraModel";

const CategoriaModel = sequelize.define(
  "CATEGORIA_TB",
  {
    categoriaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { freezeTableName: true }
);

export default CategoriaModel;
