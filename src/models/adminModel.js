const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const adminsRef = db.ref('admins');

const addAdmin = async (adminData) => {
  try {
    const newAdminRef = adminsRef.push();
    await newAdminRef.set(adminData);
    return newAdminRef.key;
  } catch (error) {
    throw error;
  }
};

const getAdminById = async (adminId) => {
  try {
    const snapshot = await adminsRef.child(adminId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllAdmins = async () => {
  try {
    const snapshot = await adminsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateAdmin = async (adminId, adminData) => {
  try {
    await adminsRef.child(adminId).update(adminData);
    return adminId;
  } catch (error) {
    throw error;
  }
};

const deleteAdmin = async (adminId) => {
  try {
    await adminsRef.child(adminId).remove();
    return adminId;
  } catch (error) {
    throw error;
  }
};

const getPenggunaByID = async (id_apph) => {
  try {
    const snapshot = await adminsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updatePenggunaByID = async (id_apph, updatedData) => {
  try {
    const snapshot = await adminsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await adminsRef.child(key).update(updatedData);
      return { success: true, message: 'Data pengguna berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data pengguna tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const loginAdmin = async (id_apph, password) => {
  try {
    const snapshot = await adminsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    const adminData = snapshot.val();
    
    if (!adminData) {
      throw new Error('admin not found');
    }
    const admin = Object.values(adminData)[0];
    if (admin.password !== password) {
      throw new Error('Invalid password');
    }

    return admin;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addAdmin,
  getAdminById,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  getPenggunaByID,
  updatePenggunaByID,
  loginAdmin
};
