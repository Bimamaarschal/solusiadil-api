const apphModel = require('../models/apphModel');

const createAph = async (req, res, next) => {
    try {
      const { id_apph, nik, alamat, pendidikan, pekerjaan, doc_pendukung, email, password } = req.body;
      if ( !id_apph || !nik || !alamat || !pendidikan || !pekerjaan || !doc_pendukung || !email || !password ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const apphData = { id_apph, nik, alamat, pendidikan, pekerjaan, doc_pendukung, email, password };
      const apphId = await apphModel.addAph(apphData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', apphId });
    } catch (error) {
      next(error);
    }
  };
  

const getAph = async (req, res, next) => {
  try {
    const apphId = req.params.id;
    const apph = await apphModel.getAphById(apphId);
    if (!apph) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(apph);
    }
  } catch (error) {
    next(error);
  }
};

const getAllAphs = async (req, res, next) => {
  try {
    const apphs = await apphModel.getAllAphs();
    res.status(200).json(apphs);
  } catch (error) {
    next(error);
  }
};

const updateAph = async (req, res, next) => {
  try {
    const apphId = req.params.id;
    const apphData = req.body;
    await apphModel.updateAph(apphId, apphData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', apphId });
  } catch (error) {
    next(error);
  }
};

const deleteAph = async (req, res, next) => {
  try {
    const apphId = req.params.id;
    await apphModel.deleteAph(apphId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', apphId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAph,
  getAph,
  getAllAphs,
  updateAph,
  deleteAph
};
