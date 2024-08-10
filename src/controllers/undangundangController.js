const undangundangModel = require('../models/undangundangModel');

const createUndang = async (req, res, next) => {
    try {
      const { id_uu, id_apph, nama_apph, jenis, tanggal, oleh, judul, no, tahun, tentang, dokumen, keterangan, status } = req.body;
      if ( !id_uu || !id_apph || !nama_apph || !jenis || !tanggal || !oleh || !judul || !no || !tahun || !tentang || !dokumen || !keterangan || !status ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const undangundangData = { id_uu, id_apph, nama_apph, jenis, tanggal, oleh, judul, no, tahun, tentang, dokumen, keterangan, status };
      const undangundangId = await undangundangModel.addUndang(undangundangData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', undangundangId });
    } catch (error) {
      next(error);
    }
  };
  
const getUndang = async (req, res, next) => {
  try {
    const undangundangId = req.params.id;
    const undangundang = await undangundangModel.getUndangById(undangundangId);
    if (!undangundang) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(undangundang);
    }
  } catch (error) {
    next(error);
  }
};

const getAllUndangs = async (req, res, next) => {
  try {
    const undangundangs = await undangundangModel.getAllUndangs();
    res.status(200).json(undangundangs);
  } catch (error) {
    next(error);
  }
};

const updateUndang = async (req, res, next) => {
  try {
    const undangundangId = req.params.id;
    const undangundangData = req.body;
    await undangundangModel.updateUndang(undangundangId, undangundangData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', undangundangId });
  } catch (error) {
    next(error);
  }
};

const deleteUndang = async (req, res, next) => {
  try {
    const undangundangId = req.params.id;
    await undangundangModel.deleteUndang(undangundangId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', undangundangId });
  } catch (error) {
    next(error);
  }
};

const getUndangByID = async (req, res, next) => {
  try {
    const { id_uu } = req.params;
    if (!id_uu) {
      return res.status(400).json({ message: 'id_uu parameter is required' });
    }
    const undangundangData = await undangundangModel.getUndangByID(id_uu);
    if (!undangundangData) {
      return res.status(404).json({ message: 'undangundang not found' });
    }
    res.status(200).json(undangundangData);
  } catch (error) {
    next(error);
  }
};

const updateUndangByID = async (req, res, next) => {
  try {
    const id_uu = req.params.id_uu;
    const undangundangData = req.body;
    const result = await undangundangModel.updateUndangByID(id_uu, undangundangData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_uu });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const deleteUndangByID = async (req, res, next) => {
  try {
    const id_uu = req.params.id_uu;
    const result = await undangundangModel.deleteUndangByID(id_uu);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_uu });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUndang,
  getUndang,
  getAllUndangs,
  updateUndang,
  getUndangByID,
  updateUndangByID,
  deleteUndangByID,
  deleteUndang
};
