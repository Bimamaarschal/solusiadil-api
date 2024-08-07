const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const apphsRef = db.ref('apphs');

const addAph = async (apphData) => {
  try {
    const newAphRef = apphsRef.push();
    await newAphRef.set(apphData);
    return newAphRef.key;
  } catch (error) {
    throw error;
  }
};

const getAphById = async (apphId) => {
  try {
    const snapshot = await apphsRef.child(apphId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllAphs = async () => {
  try {
    const snapshot = await apphsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateAph = async (apphId, apphData) => {
  try {
    await apphsRef.child(apphId).update(apphData);
    return apphId;
  } catch (error) {
    throw error;
  }
};

const deleteAph = async (apphId) => {
  try {
    await apphsRef.child(apphId).remove();
    return apphId;
  } catch (error) {
    throw error;
  }
};

const getPenggunaByID = async (id_apph) => {
  try {
    const snapshot = await apphsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePenggunaByID = async (id_apph, updatedData) => {
  try {
    const snapshot = await apphsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await apphsRef.child(key).update(updatedData);
      return { success: true, message: 'Data pengguna berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data pengguna tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const loginApph = async (id_apph, password) => {
  try {
    const snapshot = await apphsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    const apphData = snapshot.val();
    
    if (!apphData) {
      throw new Error('Apph not found');
    }
    const apph = Object.values(apphData)[0];
    if (apph.password !== password) {
      throw new Error('Invalid password');
    }

    return apph;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addAph,
  getAphById,
  getAllAphs,
  updateAph,
  deleteAph,
  getPenggunaByID,
  updatePenggunaByID,
  loginApph
};
