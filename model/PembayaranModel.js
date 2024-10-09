import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Tamu from "./TamuModel.js";

const Pembayaran = db.define (
    "Pembayaran",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoncrement: true,
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
        tableName: "pembayaran"
    }
)

Pembayaran.hasMany(Tamu, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Tamu.belongsTo(Pembayaran, {
    foreignKey: "PembayaranId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default Pembayaran;