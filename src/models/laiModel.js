const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const laisRef = db.ref('lais');

const addLembaga = async (laiData) => {
  try {
    const newLembagaRef = laisRef.push();
    await newLembagaRef.set(laiData);
    return newLembagaRef.key;
  } catch (error) {
    throw error;
  }
};

const getLembagaById = async (laiId) => {
  try {
    const snapshot = await laisRef.child(laiId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllLembagas = async () => {
  try {
    const snapshot = await laisRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateLembaga = async (laiId, laiData) => {
  try {
    await laisRef.child(laiId).update(laiData);
    return laiId;
  } catch (error) {
    throw error;
  }
};

const deleteLembaga = async (laiId) => {
  try {
    await laisRef.child(laiId).remove();
    return laiId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addLembaga,
  getLembagaById,
  getAllLembagas,
  updateLembaga,
  deleteLembaga
};
