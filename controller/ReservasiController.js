import Reservasi from "../model/ReservasiModel.js";


export const getAllReservasi = async (req, res) => {
    try{
        const Reservasi = await Reservasi.findAll();
        res.status(200).json(Reservasi)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllTamu"})
    }
};

export const getReservasiById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const Reservasi = await Tamu.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!Reservasi) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(Reservasi);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createReservasi = async (req, res) => {
    const { name, type, description } = req.body;
    const Reservasi = await Reservasi.create({ name, type, description });
  
    res.status(201).json(Reservasi);
};


export const updateReservasi = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await Reservasi.update({ name, type, description }, { where: { id } });
        const updateReservasi = await Reservasi.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateReservasi);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deleteReservasi = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Reservasi.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}