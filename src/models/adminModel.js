const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const adminsRef = db.ref('admins');

const addMadmin = async (adminData) => {
  try {
    const newMadminRef = adminsRef.push();
    await newMadminRef.set(adminData);
    return newMadminRef.key;
  } catch (error) {
    throw error;
  }
};

const getMadminById = async (adminId) => {
  try {
    const snapshot = await adminsRef.child(adminId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllMadmins = async () => {
  try {
    const snapshot = await adminsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateMadmin = async (adminId, adminData) => {
  try {
    await adminsRef.child(adminId).update(adminData);
    return adminId;
  } catch (error) {
    throw error;
  }
};

const deleteMadmin = async (adminId) => {
  try {
    await adminsRef.child(adminId).remove();
    return adminId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addMadmin,
  getMadminById,
  getAllMadmins,
  updateMadmin,
  deleteMadmin
};
