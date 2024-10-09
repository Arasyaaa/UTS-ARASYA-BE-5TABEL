import Pembayaran from "../model/PembayaranModel.js";


export const getAllPembayaran = async (req, res) => {
    try{
        const Pembayaran = await Pembayaran.findAll();
        res.status(200).json(Pembayaran)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPembayaran"})
    }
};

export const getPembayaranById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const Pembayaran = await Pembayaran.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!Pembayaran) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(Pembayaran);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPembayaran = async (req, res) => {
    const { name, type, description } = req.body;
    const Pembayaran = await Pembayaran.create({ name, type, description });
  
    res.status(201).json(Pembayaran);
};


export const updatePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await Pembayaran.update({ name, type, description }, { where: { id } });
        const updatePembayaran = await Pembayaran.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updatePembayaran);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deletePembayaran = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Pembayaran.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}