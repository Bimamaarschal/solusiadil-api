const adminsModel = require('../models/adminsModel');

const createAdmins = async (req, res, next) => {
    try {
      const { id_admins, nik, nama_admins, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan } = req.body;
      if ( !id_admins || !nik || !nama_admins || !alamat || !pendidikan || !pekerjaan || !doc_pendukung || !email || !password || !poin || !jumlah_kontribusi || !keterangan) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const adminsData = { id_admins, nik, nama_admins, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan };
      const adminsId = await adminsModel.addAdmins(adminsData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', adminsId });
    } catch (error) {
      next(error);
    }
  };
  

const getAdmins = async (req, res, next) => {
  try {
    const adminsId = req.params.id;
    const admins = await adminsModel.getAdminsById(adminsId);
    if (!admins) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(admins);
    }
  } catch (error) {
    next(error);
  }
};

const getAllAdminss = async (req, res, next) => {
  try {
    const adminss = await adminsModel.getAllAdminss();
    res.status(200).json(adminss);
  } catch (error) {
    next(error);
  }
};

const updateAdmins = async (req, res, next) => {
  try {
    const adminsId = req.params.id;
    const adminsData = req.body;
    await adminsModel.updateAdmins(adminsId, adminsData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', adminsId });
  } catch (error) {
    next(error);
  }
};

const deleteAdmins = async (req, res, next) => {
  try {
    const adminsId = req.params.id;
    await adminsModel.deleteAdmins(adminsId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', adminsId });
  } catch (error) {
    next(error);
  }
};

const getPenggunaByID = async (req, res, next) => {
  try {
    const { id_admins } = req.params;
    if (!id_admins) {
      return res.status(400).json({ message: 'id_admins parameter is required' });
    }
    const adminsData = await adminsModel.getPenggunaByID(id_admins);
    if (!adminsData) {
      return res.status(404).json({ message: 'admins not found' });
    }
    res.status(200).json(adminsData);
  } catch (error) {
    next(error);
  }
};

const updatePenggunaByID = async (req, res, next) => {
  try {
    const id_admins = req.params.id_admins;
    const adminsData = req.body;
    const result = await adminsModel.updatePenggunaByID(id_admins, adminsData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_admins });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const loginAdmins = async (req, res, next) => {
  try {
    const { id_admins, password } = req.body;
    if (!id_admins || !password) {
      return res.status(400).json({ message: 'id_admins and password are required' });
    }
    const adminsData = await adminsModel.loginadmins(id_admins, password);
    if (!adminsData) {
      return res.status(401).json({ message: 'Invalid id_admins or password' });
    }
    res.status(200).json({ message: 'Login successful', adminsData });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createAdmins,
  getAdmins,
  getAllAdminss,
  updateAdmins,
  deleteAdmins,
  getPenggunaByID,
  updatePenggunaByID,
  loginAdmins
};
