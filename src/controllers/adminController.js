const adminModel = require('../models/adminModel');

const createMadmin = async (req, res, next) => {
    try {
      const { id_admin, nik, status_admin, tanggal_bekerja, alamat, doc_pendukung, email, password } = req.body;
      if (!id_admin || !nik || !status_admin || !tanggal_bekerja || !alamat || !doc_pendukung || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const adminData = { id_admin, nik, status_admin, tanggal_bekerja, alamat, doc_pendukung, email, password };
      const adminId = await adminModel.addMadmin(adminData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', adminId });
    } catch (error) {
      next(error);
    }
  };
  

const getMadmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const admin = await adminModel.getMadminById(adminId);
    if (!admin) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(admin);
    }
  } catch (error) {
    next(error);
  }
};

const getAllMadmins = async (req, res, next) => {
  try {
    const admins = await adminModel.getAllMadmins();
    res.status(200).json(admins);
  } catch (error) {
    next(error);
  }
};

const updateMadmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const adminData = req.body;
    await adminModel.updateMadmin(adminId, adminData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', adminId });
  } catch (error) {
    next(error);
  }
};

const deleteMadmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    await adminModel.deleteMadmin(adminId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', adminId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMadmin,
  getMadmin,
  getAllMadmins,
  updateMadmin,
  deleteMadmin
};
