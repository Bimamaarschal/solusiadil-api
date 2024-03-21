const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const usersRef = db.ref('users');

const addPengguna = async (userData) => {
  try {
    const newPenggunaRef = usersRef.push();
    await newPenggunaRef.set(userData);
    return newPenggunaRef.key;
  } catch (error) {
    throw error;
  }
};

const getPenggunaById = async (userId) => {
  try {
    const snapshot = await usersRef.child(userId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllPenggunas = async () => {
  try {
    const snapshot = await usersRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePengguna = async (userId, userData) => {
  try {
    await usersRef.child(userId).update(userData);
    return userId;
  } catch (error) {
    throw error;
  }
};

const deletePengguna = async (userId) => {
  try {
    await usersRef.child(userId).remove();
    return userId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addPengguna,
  getPenggunaById,
  getAllPenggunas,
  updatePengguna,
  deletePengguna
};
