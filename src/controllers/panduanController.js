const panduanModel = require('../models/panduanModel');

const createPH = async (req, res, next) => {
    try {
      const { id_panduan, id_admin, id_apph, nama_apph, tanggal, judul, isi_1, isi_2, email, gambar, keterangan, status, id_lai, nama_lai, id_uu, undangundang } = req.body;
      if ( !id_panduan || !id_admin || !id_apph || !nama_apph || !tanggal || !judul || !isi_1 || !isi_2 || !email || !gambar || !keterangan || !status || !id_lai || !nama_lai || !id_uu || !undangundang ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const panduanData = { id_panduan, id_admin, id_apph, nama_apph, tanggal, judul, isi_1, isi_2, email, gambar, keterangan, status, id_lai, nama_lai, id_uu, undangundang };
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

const getPanduanByID = async (req, res, next) => {
  try {
    const { id_panduan } = req.params;
    if (!id_panduan) {
      return res.status(400).json({ message: 'id_panduan parameter is required' });
    }
    const panduanData = await panduanModel.getPanduanByID(id_panduan);
    if (!panduanData) {
      return res.status(404).json({ message: 'PANDUAN not found' });
    }
    res.status(200).json(panduanData);
  } catch (error) {
    next(error);
  }
};

const updatePanduanByID = async (req, res, next) => {
  try {
    const id_panduan = req.params.id_panduan;
    const panduanData = req.body;
    const result = await panduanModel.updatePanduanByID(id_panduan, panduanData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_panduan });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const deletePanduanByID = async (req, res, next) => {
  try {
    const id_panduan = req.params.id_panduan;
    const result = await panduanModel.deletePanduanByID(id_panduan);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_panduan });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPH,
  getPH,
  getAllPHs,
  updatePH,
  getPanduanByID,
  updatePanduanByID,
  deletePanduanByID,
  deletePH
};
