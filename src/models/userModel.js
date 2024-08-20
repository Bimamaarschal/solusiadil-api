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

const getPenggunaByNIK = async (id_masyarakat) => {
  try {
    const snapshot = await usersRef.orderByChild('id_masyarakat').equalTo(id_masyarakat).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePenggunaByNIK = async (id_masyarakat, updatedData) => {
  try {
    const snapshot = await usersRef.orderByChild('id_masyarakat').equalTo(id_masyarakat).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await usersRef.child(key).update(updatedData);
      return { success: true, message: 'Data pengguna berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data pengguna tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const loginPengguna = async (id_masyarakat, password) => {
  try {
    const snapshot = await usersRef.orderByChild('id_masyarakat').equalTo(id_masyarakat).once('value');
    const userData = snapshot.val();
    
    if (!userData) {
      throw new Error('User not found');
    }
    const user = Object.values(userData)[0];
    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    throw error;
  }
};


const deletePenggunaByID = async (id_masyarakat) => {
  try {
    const snapshot = await usersRef.orderByChild('id_masyarakat').equalTo(id_masyarakat).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await usersRef.child(key).remove();
      return { success: true, message: 'Data apph berhasil dihapus' };
    } else {
      return { success: false, message: 'Data apph tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addPengguna,
  getPenggunaById,
  getAllPenggunas,
  updatePengguna,
  deletePengguna,
  getPenggunaByNIK,
  updatePenggunaByNIK,
  deletePenggunaByID,
  loginPengguna
};
