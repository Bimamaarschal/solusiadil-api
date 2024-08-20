const firebaseAdmin = require('./firebaseConfig');

const db = firebaseAdmin.database();
const adminssRef = db.ref('adminss');

const addAdmins = async (adminsData) => {
  try {
    const newAdminsRef = adminssRef.push();
    await newAdminsRef.set(adminsData);
    return newAdminsRef.key;
  } catch (error) {
    throw error;
  }
};

const getAdminsById = async (adminsId) => {
  try {
    const snapshot = await adminssRef.child(adminsId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllAdminss = async () => {
  try {
    const snapshot = await adminssRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateAdmins = async (adminsId, adminsData) => {
  try {
    await adminssRef.child(adminsId).update(adminsData);
    return adminsId;
  } catch (error) {
    throw error;
  }
};

const deleteAdmins = async (adminsId) => {
  try {
    await adminssRef.child(adminsId).remove();
    return adminsId;
  } catch (error) {
    throw error;
  }
};

const getPenggunaByID = async (id_admins) => {
  try {
    const snapshot = await adminssRef.orderByChild('id_admins').equalTo(id_admins).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePenggunaByID = async (id_admins, updatedData) => {
  try {
    const snapshot = await adminssRef.orderByChild('id_admins').equalTo(id_admins).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await adminssRef.child(key).update(updatedData);
      return { success: true, message: 'Data pengguna berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data pengguna tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const loginAdmins = async (id_admins, password) => {
  try {
    const snapshot = await adminssRef.orderByChild('id_admins').equalTo(id_admins).once('value');
    const adminsData = snapshot.val();
    
    if (!adminsData) {
      throw new Error('admins not found');
    }
    const admins = Object.values(adminsData)[0];
    if (admins.password !== password) {
      throw new Error('Invalid password');
    }

    return admins;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addAdmins,
  getAdminsById,
  getAllAdminss,
  updateAdmins,
  deleteAdmins,
  getPenggunaByID,
  updatePenggunaByID,
  loginAdmins
};
