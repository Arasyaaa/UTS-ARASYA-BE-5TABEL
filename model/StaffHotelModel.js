import db from "../utils/connection.js";
import { DataTypes } from "sequelize";
import Kamar from "./KamarModel.js";

const StaffHotel = db.define (
    "StaffHotel",
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
        tableName: "staffhotel"
    }
)

StaffHotel.hasMany(Kamar, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Kamar.belongsTo(StaffHotel, {
    foreignKey: "StaffHotelId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


export default StaffHotel;