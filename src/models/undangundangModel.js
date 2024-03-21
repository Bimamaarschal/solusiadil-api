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

module.exports = {
  addUndang,
  getUndangById,
  getAllUndangs,
  updateUndang,
  deleteUndang
};
