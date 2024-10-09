import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Pembayaran from "./PembayaranModel.js";

const Kamar = db.define (
    "Kamar",
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
        tableName: "kamar"
    }
)

Kamar.hasMany(Pembayaran, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Pembayaran.belongsTo(Kamar, {
    foreignKey: "KamarId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default Kamar;