const userModel = require('../models/userModel');

const createPengguna = async (req, res, next) => {
    try {
      const { judul, pengarang, tahun, penerbit } = req.body;
      if (!judul || !pengarang || !tahun || !penerbit) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const userData = { judul, pengarang, tahun, penerbit };
      const userId = await userModel.addPengguna(userData);
      res.status(201).json({ message: 'user created successfully', userId });
    } catch (error) {
      next(error);
    }
  };
  

const getPengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getPenggunaById(userId);
    if (!user) {
      res.status(404).json({ message: 'user not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const getAllPenggunas = async (req, res, next) => {
  try {
    const users = await userModel.getAllPenggunas();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const updatePengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    await userModel.updatePengguna(userId, userData);
    res.status(200).json({ message: 'user updated successfully', userId });
  } catch (error) {
    next(error);
  }
};

const deletePengguna = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userModel.deletePengguna(userId);
    res.status(200).json({ message: 'user deleted successfully', userId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPengguna,
  getPengguna,
  getAllPenggunas,
  updatePengguna,
  deletePengguna
};
