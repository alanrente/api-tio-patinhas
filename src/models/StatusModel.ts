import { DataTypes } from "sequelize";
import { sequelize } from "../infra/database";

const StatusModel = sequelize.define(
  "STATUS_TB",
  {
    statusId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { freezeTableName: true }
);

export default StatusModel;
