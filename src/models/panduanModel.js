const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const panduansRef = db.ref('panduans');

const addPH = async (panduanData) => {
  try {
    const newPHRef = panduansRef.push();
    await newPHRef.set(panduanData);
    return newPHRef.key;
  } catch (error) {
    throw error;
  }
};

const getPHById = async (panduanId) => {
  try {
    const snapshot = await panduansRef.child(panduanId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllPHs = async () => {
  try {
    const snapshot = await panduansRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePH = async (panduanId, panduanData) => {
  try {
    await panduansRef.child(panduanId).update(panduanData);
    return panduanId;
  } catch (error) {
    throw error;
  }
};

const deletePH = async (panduanId) => {
  try {
    await panduansRef.child(panduanId).remove();
    return panduanId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addPH,
  getPHById,
  getAllPHs,
  updatePH,
  deletePH
};
