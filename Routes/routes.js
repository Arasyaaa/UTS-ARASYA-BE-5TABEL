import express from 'express';
    import { createTamu, deleteTamu, getAllTamu, getTamuById, updateTamu } from "../controller/TamuController.js";
    import { createReservasi, deleteReservasi, getAllReservasi, getReservasiById, updateReservasi } from "../controller/ReservasiController.js";
    import { createStaffHotel, deleteStaffHotel, getAllStaffHotel, getStaffHotelById, updateStaffHotel } from "../controller/StaffHotelController.js";
    import { createKamar, deleteKamar, getAllKamar, getKamarById, updateKamar } from "../controller/KamarController.js";
    import { createPembayaran, deletePembayaran, getAllPembayaran, getPembayaranById, updatePembayaran } from "../controller/PembayaranController.js";
    const router = express.Router();

    // TAMU
    router.get("/Tamu", getAllTamu)
    router.get("/Tamu/find/:id", getTamuById)
    router.post("/Tamu/create", createTamu)
    router.put("/Tamu/update/:id", updateTamu)
    router.delete("/Tamu/delete/:id", deleteTamu)

    // RESERVASI
    router.get("/Reservasi", getAllReservasi)
    router.get("/Reservasi/find/:id", getReservasiById)
    router.post("/Reservasi/create", createReservasi)
    router.put("/Reservasi/update/:id", updateReservasi)
    router.delete("/Reservasi/delete?:id", deleteReservasi)

    // STAFFHOTEL
    router.get("/StaffHotel", getAllStaffHotel)
    router.get("/StaffHotel/find/:id", getStaffHotelById)
    router.post("/StaffHotel/create", createStaffHotel)
    router.put("/StaffHotel/update/:id", updateStaffHotel)
    router.delete("/StaffHotel/delete/:id", deleteStaffHotel)

    // KAMAR
    router.get("/Kamar", getAllKamar)
    router.get("/Kamar/find/:id", getKamarById)
    router.post("/Kamar/create", createKamar)
    router.put("/Kamar/update/:id", updateKamar)
    router.delete("/Kamar/delete/:id", deleteKamar)

    // PEMBAYARAN
    router.get("/Pembayaran", getAllPembayaran)
    router.get("/Pembayaran/find/:id", getPembayaranById)
    router.post("/Pembayarank/create", createPembayaran)
    router.put("/Pembayaran/update/:id", updatePembayaran)
    router.delete("/Pemabayaran/delete/:id", deletePembayaran)


    export default router