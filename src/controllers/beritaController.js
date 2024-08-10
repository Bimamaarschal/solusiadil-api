const beritaModel = require('../models/beritaModel');

const createBerita = async (req, res, next) => {
    try {
      const { id_berita, id_apph, nama_apph, tanggal, judul, keterangan, isi, status, tag } = req.body;
      if ( !id_berita || !id_apph || !nama_apph || !tanggal || !judul || !keterangan || !isi || !status || !tag ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const beritaData = { id_berita, id_apph, nama_apph, tanggal, judul, keterangan, isi, status, tag };
      const beritaId = await beritaModel.addBerita(beritaData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', beritaId });
    } catch (error) {
      next(error);
    }
  };
  
const getBerita = async (req, res, next) => {
  try {
    const beritaId = req.params.id;
    const berita = await beritaModel.getBeritaById(beritaId);
    if (!berita) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(berita);
    }
  } catch (error) {
    next(error);
  }
};

const getAllBeritas = async (req, res, next) => {
  try {
    const beritas = await beritaModel.getAllBeritas();
    res.status(200).json(beritas);
  } catch (error) {
    next(error);
  }
};

const updateBerita = async (req, res, next) => {
  try {
    const beritaId = req.params.id;
    const beritaData = req.body;
    await beritaModel.updateBerita(beritaId, beritaData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', beritaId });
  } catch (error) {
    next(error);
  }
};

const deleteBerita = async (req, res, next) => {
  try {
    const beritaId = req.params.id;
    await beritaModel.deleteBerita(beritaId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', beritaId });
  } catch (error) {
    next(error);
  }
};

const getBeritaByID = async (req, res, next) => {
  try {
    const { id_berita } = req.params;
    if (!id_berita) {
      return res.status(400).json({ message: 'id_berita parameter is required' });
    }
    const beritaData = await beritaModel.getBeritaByID(id_berita);
    if (!beritaData) {
      return res.status(404).json({ message: 'berita not found' });
    }
    res.status(200).json(beritaData);
  } catch (error) {
    next(error);
  }
};

const updateBeritaByID = async (req, res, next) => {
  try {
    const id_berita = req.params.id_berita;
    const beritaData = req.body;
    const result = await beritaModel.updateBeritaByID(id_berita, beritaData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_berita });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const deleteBeritaByID = async (req, res, next) => {
  try {
    const id_berita = req.params.id_berita;
    const result = await beritaModel.deleteBeritaByID(id_berita);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_berita });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBerita,
  getBerita,
  getAllBeritas,
  updateBerita,
  getBeritaByID,
  updateBeritaByID,
  deleteBeritaByID,
  deleteBerita
};
