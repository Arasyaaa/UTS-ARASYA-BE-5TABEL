import Tamu from "../model/TamuModel.js";


export const getAllTamu = async (req, res) => {
    try{
        const Tamu = await Tamu.findAll();
        res.status(200).json(Tamu)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllTamu"})
    }
};

export const getTamuById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const Tamu = await Tamu.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!Tamu) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(Tamu);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createTamu = async (req, res) => {
    const { name, type, description } = req.body;
    const Tamu = await Tamu.create({ name, type, description });
  
    res.status(201).json(Tamu);
};


export const updateTamu = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await Tamu.update({ name, type, description }, { where: { id } });
        const updateTamu = await Tamu.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateTamu);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deleteTamu = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Tamu.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}