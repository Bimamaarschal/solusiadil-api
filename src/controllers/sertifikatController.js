const sertifikatModel = require('../models/sertifikatModel');

const createSertifikat = async (req, res, next) => {
    try {
      const { id_sertifikat, id_apph, nama_apph, tanggal, keterangan, status } = req.body;
      if ( !id_sertifikat || !id_apph || !nama_apph || !tanggal || !keterangan || !status ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const sertifikatData = { id_sertifikat, id_apph, nama_apph, tanggal, keterangan, status };
      const sertifikatId = await sertifikatModel.addSertifikat(sertifikatData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', sertifikatId });
    } catch (error) {
      next(error);
    }
  };
  
const getSertifikat = async (req, res, next) => {
  try {
    const sertifikatId = req.params.id;
    const sertifikat = await sertifikatModel.getSertifikatById(sertifikatId);
    if (!sertifikat) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(sertifikat);
    }
  } catch (error) {
    next(error);
  }
};

const getAllSertifikats = async (req, res, next) => {
  try {
    const Sertifikats = await sertifikatModel.getAllSertifikats();
    res.status(200).json(Sertifikats);
  } catch (error) {
    next(error);
  }
};

const updateSertifikat = async (req, res, next) => {
  try {
    const sertifikatId = req.params.id;
    const sertifikatData = req.body;
    await sertifikatModel.updateSertifikat(sertifikatId, sertifikatData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', sertifikatId });
  } catch (error) {
    next(error);
  }
};

const deleteSertifikat = async (req, res, next) => {
  try {
    const sertifikatId = req.params.id;
    await sertifikatModel.deleteSertifikat(sertifikatId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', sertifikatId });
  } catch (error) {
    next(error);
  }
};

const getSertifikatByID = async (req, res, next) => {
  try {
    const { id_sertifikat } = req.params;
    if (!id_sertifikat) {
      return res.status(400).json({ message: 'id_sertifikat parameter is required' });
    }
    const sertifikatData = await sertifikatModel.getSertifikatByID(id_sertifikat);
    if (!sertifikatData) {
      return res.status(404).json({ message: 'sertifikat not found' });
    }
    res.status(200).json(sertifikatData);
  } catch (error) {
    next(error);
  }
};

const updateSertifikatByID = async (req, res, next) => {
  try {
    const id_sertifikat = req.params.id_sertifikat;
    const sertifikatData = req.body;
    const result = await sertifikatModel.updateSertifikatByID(id_sertifikat, sertifikatData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_sertifikat });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const deleteSertifikatByID = async (req, res, next) => {
  try {
    const id_sertifikat = req.params.id_sertifikat;
    const result = await sertifikatModel.deleteSertifikatByID(id_sertifikat);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_sertifikat });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSertifikat,
  getSertifikat,
  getAllSertifikats,
  updateSertifikat,
  getSertifikatByID,
  updateSertifikatByID,
  deleteSertifikatByID,
  deleteSertifikat
};
