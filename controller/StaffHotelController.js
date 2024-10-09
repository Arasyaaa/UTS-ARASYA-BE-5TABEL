import StaffHotel from "../model/StaffHotelModel.js";


export const getAllStaffHotel = async (req, res) => {
    try{
        const StaffHotel = await StaffHotel.findAll();
        res.status(200).json(StaffHotel)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllStaffHotel"})
    }
};

export const getStaffHotelById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const StaffHotel = await StaffHotel.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!StaffHotel) {
            return res.status(404).json({ message: "obat tidak ditemukan" });
        }
        res.status(200).json(StaffHotel);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createStaffHotel = async (req, res) => {
    const { name, type, description } = req.body;
    const StaffHotel = await StaffHotel.create({ name, type, description });
  
    res.status(201).json(StaffHotel);
};


export const updateStaffHotel = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, type, description } = req.body;
        const updated = await StaffHotel.update({ name, type, description }, { where: { id } });
        const updateStaffHotel = await StaffHotel.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({ message: "obat tidak ter-update"})
        }else{
            res.status(200).json(updateStaffHotel);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate obat"})
    }
}

export const deleteStaffHotel = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await StaffHotel.destroy({where: {id}});
        res.status(200).json(deleted + ` user ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}