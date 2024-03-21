const konsultasiModel = require('../models/konsultasiModel');

const createKonsul = async (req, res, next) => {
    try {
      const { id_konsultasi, tanggal, id_masyarakat, nama_mast, id_apph, judul, pertanyaan, jawaban, keterangan, undangundang, status, media } = req.body;
      if ( !id_konsultasi || !tanggal || !id_masyarakat || !nama_mast || !id_apph || !judul || !pertanyaan || !jawaban || !keterangan || !undangundang || !status || !media ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const konsultasiData = { id_konsultasi, tanggal, id_masyarakat, nama_mast, id_apph, judul, pertanyaan, jawaban, keterangan, undangundang, status, media };
      const konsultasiId = await konsultasiModel.addKonsul(konsultasiData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', konsultasiId });
    } catch (error) {
      next(error);
    }
  };
  

const getKonsul = async (req, res, next) => {
  try {
    const konsultasiId = req.params.id;
    const konsultasi = await konsultasiModel.getKonsulById(konsultasiId);
    if (!konsultasi) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(konsultasi);
    }
  } catch (error) {
    next(error);
  }
};

const getAllKonsuls = async (req, res, next) => {
  try {
    const konsultasis = await konsultasiModel.getAllKonsuls();
    res.status(200).json(konsultasis);
  } catch (error) {
    next(error);
  }
};

const updateKonsul = async (req, res, next) => {
  try {
    const konsultasiId = req.params.id;
    const konsultasiData = req.body;
    await konsultasiModel.updateKonsul(konsultasiId, konsultasiData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', konsultasiId });
  } catch (error) {
    next(error);
  }
};

const deleteKonsul = async (req, res, next) => {
  try {
    const konsultasiId = req.params.id;
    await konsultasiModel.deleteKonsul(konsultasiId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', konsultasiId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createKonsul,
  getKonsul,
  getAllKonsuls,
  updateKonsul,
  deleteKonsul
};
