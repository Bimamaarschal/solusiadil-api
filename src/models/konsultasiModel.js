const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const konsultasisRef = db.ref('konsultasis');

const addKonsul = async (konsultasiData) => {
  try {
    const newKonsulRef = konsultasisRef.push();
    await newKonsulRef.set(konsultasiData);
    return newKonsulRef.key;
  } catch (error) {
    throw error;
  }
};

const getKonsulById = async (konsultasiId) => {
  try {
    const snapshot = await konsultasisRef.child(konsultasiId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllKonsuls = async () => {
  try {
    const snapshot = await konsultasisRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateKonsul = async (konsultasiId, konsultasiData) => {
  try {
    await konsultasisRef.child(konsultasiId).update(konsultasiData);
    return konsultasiId;
  } catch (error) {
    throw error;
  }
};

const deleteKonsul = async (konsultasiId) => {
  try {
    await konsultasisRef.child(konsultasiId).remove();
    return konsultasiId;
  } catch (error) {
    throw error;
  }
};

const getKonsulByNIK = async (id_masyarakat) => {
  try {
    console.log("id_masyarakat:", id_masyarakat); // Debugging log
    const snapshot = await konsultasisRef.orderByChild('id_masyarakat').equalTo(id_masyarakat).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getKonsulByIDK = async (id_konsultasi) => {
  try {
    console.log("id_konsultasi:", id_konsultasi);
    const snapshot = await konsultasisRef.orderByChild('id_konsultasi').equalTo(id_konsultasi).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addKonsul,
  getKonsulById,
  getKonsulByNIK,
  getKonsulByIDK,
  getAllKonsuls,
  updateKonsul,
  deleteKonsul
};
