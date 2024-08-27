const firebaseAdmin = require('./firebaseConfig');

const db = firebaseAdmin.database();
const sertifikatsRef = db.ref('sertifikats');

const addSertifikat = async (sertifikatData) => {
  try {
    const newSertifikatRef = sertifikatsRef.push();
    await newSertifikatRef.set(sertifikatData);
    return newSertifikatRef.key;
  } catch (error) {
    throw error;
  }
};

const getSertifikatById = async (sertifikatId) => {
  try {
    const snapshot = await sertifikatsRef.child(sertifikatId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllSertifikats = async () => {
  try {
    const snapshot = await sertifikatsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateSertifikat = async (sertifikatId, sertifikatData) => {
  try {
    await sertifikatsRef.child(sertifikatId).update(sertifikatData);
    return sertifikatId;
  } catch (error) {
    throw error;
  }
};

const deleteSertifikat = async (sertifikatId) => {
  try {
    await sertifikatsRef.child(sertifikatId).remove();
    return sertifikatId;
  } catch (error) {
    throw error;
  }
};

const getSertifikatByID = async (id_sertifikat) => {
  try {
    const snapshot = await sertifikatsRef.orderByChild('id_sertifikat').equalTo(id_sertifikat).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateSertifikatByID = async (id_sertifikat, updatedData) => {
  try {
    const snapshot = await sertifikatsRef.orderByChild('id_sertifikat').equalTo(id_sertifikat).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await sertifikatsRef.child(key).update(updatedData);
      return { success: true, message: 'Data sertifikat berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data sertifikat tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const deleteSertifikatByID = async (id_sertifikat) => {
  try {
    const snapshot = await sertifikatsRef.orderByChild('id_sertifikat').equalTo(id_sertifikat).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await sertifikatsRef.child(key).remove();
      return { success: true, message: 'Data sertifikat berhasil dihapus' };
    } else {
      return { success: false, message: 'Data sertifikat tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const getSertifikatByIDAPPH = async (id_apph) => {
  try {
    const snapshot = await sertifikatsRef.orderByChild('id_apph').equalTo(id_apph).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addSertifikat,
  getSertifikatById,
  getAllSertifikats,
  updateSertifikat,
  getSertifikatByID,
  getSertifikatByIDAPPH,
  updateSertifikatByID,
  deleteSertifikatByID,
  deleteSertifikat
};
