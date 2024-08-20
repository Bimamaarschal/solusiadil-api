const adminModel = require('../models/adminModel');

const createAdmin = async (req, res, next) => {
    try {
      const { id_apph, nik, nama_admin, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan } = req.body;
      if ( !id_apph || !nik || !nama_admin || !alamat || !pendidikan || !pekerjaan || !doc_pendukung || !email || !password || !poin || !jumlah_kontribusi || !keterangan) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const adminData = { id_apph, nik, nama_admin, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan };
      const adminId = await adminModel.addAdmin(adminData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', adminId });
    } catch (error) {
      next(error);
    }
  };
  

const getAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const admin = await adminModel.getAdminById(adminId);
    if (!admin) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(admin);
    }
  } catch (error) {
    next(error);
  }
};

const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await adminModel.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    next(error);
  }
};

const updateAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const adminData = req.body;
    await adminModel.updateAdmin(adminId, adminData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', adminId });
  } catch (error) {
    next(error);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    await adminModel.deleteAdmin(adminId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', adminId });
  } catch (error) {
    next(error);
  }
};

const getPenggunaByID = async (req, res, next) => {
  try {
    const { id_apph } = req.params;
    if (!id_apph) {
      return res.status(400).json({ message: 'id_apph parameter is required' });
    }
    const adminData = await adminModel.getPenggunaByID(id_apph);
    if (!adminData) {
      return res.status(404).json({ message: 'admin not found' });
    }
    res.status(200).json(adminData);
  } catch (error) {
    next(error);
  }
};

const updatePenggunaByID = async (req, res, next) => {
  try {
    const id_apph = req.params.id_apph;
    const adminData = req.body;
    const result = await adminModel.updatePenggunaByID(id_apph, adminData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_apph });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const { id_apph, password } = req.body;
    if (!id_apph || !password) {
      return res.status(400).json({ message: 'id_apph and password are required' });
    }
    const adminData = await adminModel.loginAdmin(id_apph, password);
    if (!adminData) {
      return res.status(401).json({ message: 'Invalid id_apph or password' });
    }
    res.status(200).json({ message: 'Login successful', adminData });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createAdmin,
  getAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getPenggunaByID,
  updatePenggunaByID,
  loginAdmin
};
