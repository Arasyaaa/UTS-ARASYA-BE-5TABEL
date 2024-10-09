import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import StaffHotel from "./StaffHotelModel.js";

const Reservasi = db.define (
    "Reservasi",
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
        tableName: "reservasi"
    }
)

Reservasi.hasMany(StaffHotel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

StaffHotel.belongsTo(Reservasi, {
    foreignKey: "ReservasiId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default Reservasi;