import Kamar from "../model/KamarModel.js";


export const getAllKamar = async (req, res) => {
    try{
        const Kamar = await Kamar.findAll();
        res.status(200).json(Kamar)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllKamar"})
    }
};

export const getKamarById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const Kamar = await Kamar.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!Kamar) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(Kamar);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createKamar = async (req, res) => {
    const { name, type, description } = req.body;
    const Kamar = await Kamar.create({ name, type, description });
  
    res.status(201).json(Kamar);
};


export const updateKamar = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await Kamar.update({ name, type, description }, { where: { id } });
        const updateKamar = await Kamar.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateKamar);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deleteKamar = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Kamar.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}