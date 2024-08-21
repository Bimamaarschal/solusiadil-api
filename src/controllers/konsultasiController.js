const konsultasiModel = require('../models/konsultasiModel');

const createKonsul = async (req, res, next) => {
    try {
      const { id_konsultasi, tanggal, id_masyarakat, nama_mast, id_apph, nama_apph, calendly, judul, pertanyaan, jawaban, keterangan, undangundang, status, lanjutan1, wilayahhukum, referensi, media } = req.body;
      if ( !id_konsultasi || !tanggal || !id_masyarakat || !nama_mast || !id_apph || !nama_apph || !calendly || !judul || !pertanyaan || !jawaban || !keterangan || !undangundang || !status || !lanjutan1 || !wilayahhukum || !referensi || !media ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const konsultasiData = { id_konsultasi, tanggal, id_masyarakat, nama_mast, id_apph, nama_apph, calendly, judul, pertanyaan, jawaban, keterangan, undangundang, status, lanjutan1, wilayahhukum, referensi, media };
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

const getKonsulByNIK = async (req, res, next) => {
  try {
    const { id_masyarakat } = req.params;
    if (!id_masyarakat) {
      return res.status(400).json({ message: 'id_masyarakat parameter is required' });
    }
    const konsultasiData = await konsultasiModel.getKonsulByNIK(id_masyarakat);
    if (!konsultasiData) {
      return res.status(404).json({ message: 'konsultasiData not found' });
    }
    res.status(200).json(konsultasiData);
  } catch (error) {
    next(error);
  }
};

const getKonsulByIDK = async (req, res, next) => {
  try {
    const { id_konsultasi } = req.params;
    if (!id_konsultasi) {
      return res.status(400).json({ message: 'id_konsultasi parameter is required' });
    }
    const konsultasiData = await konsultasiModel.getKonsulByIDK(id_konsultasi);
    if (!konsultasiData) {
      return res.status(404).json({ message: 'konsultasiData not found' });
    }
    res.status(200).json(konsultasiData);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createKonsul,
  getKonsul,
  getKonsulByNIK,
  getKonsulByIDK,
  getAllKonsuls,
  updateKonsul,
  deleteKonsul
};
