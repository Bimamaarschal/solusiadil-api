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

module.exports = {
  addAph,
  getAphById,
  getAllAphs,
  updateAph,
  deleteAph
};
