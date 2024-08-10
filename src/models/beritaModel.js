const firebaseAdmin = require('./firebaseConfig');

const db = firebaseAdmin.database();
const beritasRef = db.ref('beritas');

const addBerita = async (beritaData) => {
  try {
    const newBeritaRef = beritasRef.push();
    await newBeritaRef.set(beritaData);
    return newBeritaRef.key;
  } catch (error) {
    throw error;
  }
};

const getBeritaById = async (beritaId) => {
  try {
    const snapshot = await beritasRef.child(beritaId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllBeritas = async () => {
  try {
    const snapshot = await beritasRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateBerita = async (beritaId, beritaData) => {
  try {
    await beritasRef.child(beritaId).update(beritaData);
    return beritaId;
  } catch (error) {
    throw error;
  }
};

const deleteBerita = async (beritaId) => {
  try {
    await beritasRef.child(beritaId).remove();
    return beritaId;
  } catch (error) {
    throw error;
  }
};

const getBeritaByID = async (id_berita) => {
  try {
    const snapshot = await beritasRef.orderByChild('id_berita').equalTo(id_berita).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateBeritaByID = async (id_berita, updatedData) => {
  try {
    const snapshot = await beritasRef.orderByChild('id_berita').equalTo(id_berita).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await beritasRef.child(key).update(updatedData);
      return { success: true, message: 'Data Berita-Berita berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data Berita-Berita tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const deleteBeritaByID = async (id_berita) => {
  try {
    const snapshot = await beritasRef.orderByChild('id_berita').equalTo(id_berita).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await beritasRef.child(key).remove();
      return { success: true, message: 'Data Berita-Berita berhasil dihapus' };
    } else {
      return { success: false, message: 'Data Berita-Berita tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBerita,
  getBeritaById,
  getAllBeritas,
  updateBerita,
  getBeritaByID,
  updateBeritaByID,
  deleteBeritaByID,
  deleteBerita
};
