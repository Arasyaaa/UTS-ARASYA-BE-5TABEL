import db from "../utils/connection.js";
import Tamu from "./TamuModel.js";
import Reservasi from "./ReservasiModel.js";
import StaffHotel from "./StaffHotelModel.js";
import Kamar from "./KamarModel.js";
import Pembayaran from "./PembayaranModel.js"

await Tamu.sync();
await Reservasi.sync();
await StaffHotel.sync();
await Kamar.sync();
await Pembayaran.sync();

await db.sync({ alter: true });