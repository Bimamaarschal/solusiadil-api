const apphModel = require('../models/apphModel');

const createAph = async (req, res, next) => {
    try {
      const { id_apph, nik, nama_apph, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan } = req.body;
      if ( !id_apph || !nik || !nama_apph || !alamat || !pendidikan || !pekerjaan || !doc_pendukung || !email || !password || !poin || !jumlah_kontribusi || !keterangan) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const apphData = { id_apph, nik, nama_apph, alamat, pendidikan, pekerjaan, doc_pendukung, email, password, poin, jumlah_kontribusi, keterangan };
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

const getPenggunaByID = async (req, res, next) => {
  try {
    const { id_apph } = req.params;
    if (!id_apph) {
      return res.status(400).json({ message: 'id_apph parameter is required' });
    }
    const apphData = await apphModel.getPenggunaByID(id_apph);
    if (!apphData) {
      return res.status(404).json({ message: 'APPH not found' });
    }
    res.status(200).json(apphData);
  } catch (error) {
    next(error);
  }
};

const updatePenggunaByID = async (req, res, next) => {
  try {
    const id_apph = req.params.id_apph;
    const apphData = req.body;
    const result = await apphModel.updatePenggunaByID(id_apph, apphData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_apph });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const loginApph = async (req, res, next) => {
  try {
    const { id_apph, password } = req.body;
    if (!id_apph || !password) {
      return res.status(400).json({ message: 'id_apph and password are required' });
    }
    const apphData = await apphModel.loginApph(id_apph, password);
    if (!apphData) {
      return res.status(401).json({ message: 'Invalid id_apph or password' });
    }
    res.status(200).json({ message: 'Login successful', apphData });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createAph,
  getAph,
  getAllAphs,
  updateAph,
  deleteAph,
  getPenggunaByID,
  updatePenggunaByID,
  loginApph
};
