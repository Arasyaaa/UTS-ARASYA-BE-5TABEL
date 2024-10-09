import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Reservasi from "./ReservasiModel.js";

const Tamu = db.define (
    "Tamu",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "tamu"
    }
)

Tamu.hasMany(Reservasi, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Reservasi.belongsTo(Tamu, {
    foreignKey: "TamuId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default Tamu;