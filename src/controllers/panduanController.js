const panduanModel = require('../models/panduanModel');

const createPH = async (req, res, next) => {
    try {
      const { id_panduan, id_admin, tanggal, judul, isi_1, isi_2, email, gambar, keterangan, status, id_lai, nama_lai, id_uu, undangundang } = req.body;
      if ( !id_panduan || !id_admin || !tanggal || !judul || !isi_1 || !isi_2 || !email || !gambar || !keterangan || !status || !id_lai || !nama_lai || !id_uu || !undangundang ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const panduanData = { id_panduan, id_admin, tanggal, judul, isi_1, isi_2, email, gambar, keterangan, status, id_lai, nama_lai, id_uu, undangundang };
      const panduanId = await panduanModel.addPH(panduanData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', panduanId });
    } catch (error) {
      next(error);
    }
  };
  

const getPH = async (req, res, next) => {
  try {
    const panduanId = req.params.id;
    const panduan = await panduanModel.getPHById(panduanId);
    if (!panduan) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(panduan);
    }
  } catch (error) {
    next(error);
  }
};

const getAllPHs = async (req, res, next) => {
  try {
    const panduans = await panduanModel.getAllPHs();
    res.status(200).json(panduans);
  } catch (error) {
    next(error);
  }
};

const updatePH = async (req, res, next) => {
  try {
    const panduanId = req.params.id;
    const panduanData = req.body;
    await panduanModel.updatePH(panduanId, panduanData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', panduanId });
  } catch (error) {
    next(error);
  }
};

const deletePH = async (req, res, next) => {
  try {
    const panduanId = req.params.id;
    await panduanModel.deletePH(panduanId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', panduanId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPH,
  getPH,
  getAllPHs,
  updatePH,
  deletePH
};
