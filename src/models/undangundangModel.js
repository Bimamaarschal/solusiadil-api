const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const undangundangsRef = db.ref('undangundangs');

const addUndang = async (undangundangData) => {
  try {
    const newUndangRef = undangundangsRef.push();
    await newUndangRef.set(undangundangData);
    return newUndangRef.key;
  } catch (error) {
    throw error;
  }
};

const getUndangById = async (undangundangId) => {
  try {
    const snapshot = await undangundangsRef.child(undangundangId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllUndangs = async () => {
  try {
    const snapshot = await undangundangsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateUndang = async (undangundangId, undangundangData) => {
  try {
    await undangundangsRef.child(undangundangId).update(undangundangData);
    return undangundangId;
  } catch (error) {
    throw error;
  }
};

const deleteUndang = async (undangundangId) => {
  try {
    await undangundangsRef.child(undangundangId).remove();
    return undangundangId;
  } catch (error) {
    throw error;
  }
};

const getUndangByID = async (id_uu) => {
  try {
    const snapshot = await undangundangsRef.orderByChild('id_uu').equalTo(id_uu).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateUndangByID = async (id_uu, updatedData) => {
  try {
    const snapshot = await undangundangsRef.orderByChild('id_uu').equalTo(id_uu).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await undangundangsRef.child(key).update(updatedData);
      return { success: true, message: 'Data undang-undang berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data undang-undang tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const deleteUndangByID = async (id_uu) => {
  try {
    const snapshot = await undangundangsRef.orderByChild('id_uu').equalTo(id_uu).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await undangundangsRef.child(key).remove();
      return { success: true, message: 'Data undang-undang berhasil dihapus' };
    } else {
      return { success: false, message: 'Data undang-undang tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUndang,
  getUndangById,
  getAllUndangs,
  updateUndang,
  getUndangByID,
  updateUndangByID,
  deleteUndangByID,
  deleteUndang
};
