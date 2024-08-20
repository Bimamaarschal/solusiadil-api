const userModel = require('../models/userModel');

const createPengguna = async (req, res, next) => {
    try {
      const { id_masyarakat, nik, nama, tgl_lahir, jenis_kelamin, alamat, no_tlp, foto, email, password } = req.body;
      if (!id_masyarakat || !nik || !nama || !tgl_lahir || !jenis_kelamin || !alamat || !no_tlp || !foto || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const userData = { id_masyarakat, nik, nama, tgl_lahir, jenis_kelamin, alamat, no_tlp, foto, email, password };
      const userId = await userModel.addPengguna(userData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', userId });
    } catch (error) {
      next(error);
    }
  };
  

const getPengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getPenggunaById(userId);
    if (!user) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const getAllPenggunas = async (req, res, next) => {
  try {
    const users = await userModel.getAllPenggunas();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const updatePengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    await userModel.updatePengguna(userId, userData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', userId });
  } catch (error) {
    next(error);
  }
};

const deletePengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userModel.deletePengguna(userId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', userId });
  } catch (error) {
    next(error);
  }
};

const getPenggunaByNIK = async (req, res, next) => {
  try {
    const { id_masyarakat } = req.params;
    if (!id_masyarakat) {
      return res.status(400).json({ message: 'id_masyarakat parameter is required' });
    }
    const userData = await userModel.getPenggunaByNIK(id_masyarakat);
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

const updatePenggunaByNIK = async (req, res, next) => {
  try {
    const id_masyarakat = req.params.id_masyarakat;
    const userData = req.body;
    const result = await userModel.updatePenggunaByNIK(id_masyarakat, userData);
    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_masyarakat });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const loginPengguna = async (req, res, next) => {
  try {
    const { id_masyarakat, password } = req.body;
    if (!id_masyarakat || !password) {
      return res.status(400).json({ message: 'id_masyarakat and password are required' });
    }
    const userData = await userModel.loginPengguna(id_masyarakat, password);
    if (!userData) {
      return res.status(401).json({ message: 'Invalid id_masyarakat or password' });
    }
    res.status(200).json({ message: 'Login successful', userData });
  } catch (error) {
    next(error);
  }
};

const deletePenggunaByID = async (req, res, next) => {
  try {
    const id_masyarakat = req.params.id_masyarakat;
    const result = await userModel.deletePenggunaByID(id_masyarakat);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_masyarakat });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createPengguna,
  getPengguna,
  getAllPenggunas,
  updatePengguna,
  deletePengguna,
  getPenggunaByNIK,
  updatePenggunaByNIK,
  deletePenggunaByID,
  loginPengguna
};
