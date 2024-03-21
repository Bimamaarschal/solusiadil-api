const laiModel = require('../models/laiModel');

const createLembaga = async (req, res, next) => {
    try {
      const { id_lai, no_lai_resmi, id_admin, nama_lai, alamat, foto, no_hp, email, keterangan_1, keterangan_2, status } = req.body;
      if ( !id_lai || !no_lai_resmi || !id_admin || !nama_lai || !alamat || !foto || !no_hp || !email || !keterangan_1 || !keterangan_2 || !status ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const laiData = { id_lai, no_lai_resmi, id_admin, nama_lai, alamat, foto, no_hp, email, keterangan_1, keterangan_2, status };
      const laiId = await laiModel.addLembaga(laiData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', laiId });
    } catch (error) {
      next(error);
    }
  };
  

const getLembaga = async (req, res, next) => {
  try {
    const laiId = req.params.id;
    const lai = await laiModel.getLembagaById(laiId);
    if (!lai) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(lai);
    }
  } catch (error) {
    next(error);
  }
};

const getAllLembagas = async (req, res, next) => {
  try {
    const lais = await laiModel.getAllLembagas();
    res.status(200).json(lais);
  } catch (error) {
    next(error);
  }
};

const updateLembaga = async (req, res, next) => {
  try {
    const laiId = req.params.id;
    const laiData = req.body;
    await laiModel.updateLembaga(laiId, laiData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', laiId });
  } catch (error) {
    next(error);
  }
};

const deleteLembaga = async (req, res, next) => {
  try {
    const laiId = req.params.id;
    await laiModel.deleteLembaga(laiId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', laiId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLembaga,
  getLembaga,
  getAllLembagas,
  updateLembaga,
  deleteLembaga
};
