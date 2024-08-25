const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const blogsRef = db.ref('blogs');

const addTulisan = async (blogData) => {
  try {
    const newTulisanRef = blogsRef.push();
    await newTulisanRef.set(blogData);
    return newTulisanRef.key;
  } catch (error) {
    throw error;
  }
};

const getTulisanById = async (blogId) => {
  try {
    const snapshot = await blogsRef.child(blogId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllTulisans = async () => {
  try {
    const snapshot = await blogsRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateTulisan = async (blogId, blogData) => {
  try {
    await blogsRef.child(blogId).update(blogData);
    return blogId;
  } catch (error) {
    throw error;
  }
};

const deleteTulisan = async (blogId) => {
  try {
    await blogsRef.child(blogId).remove();
    return blogId;
  } catch (error) {
    throw error;
  }
};

const getTulisanByID = async (id_blog) => {
  try {
    console.log("id_blog:", id_blog);
    const snapshot = await blogsRef.orderByChild('id_blog').equalTo(id_blog).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateTulisanByID = async (id_blog, updatedData) => {
  try {
    const snapshot = await blogsRef.orderByChild('id_blog').equalTo(id_blog).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await blogsRef.child(key).update(updatedData);
      return { success: true, message: 'Data Blog berhasil diperbarui' };
    } else {
      return { success: false, message: 'Data Blog tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};

const deleteTulisanByID = async (id_blog) => {
  try {
    const snapshot = await blogsRef.orderByChild('id_blog').equalTo(id_blog).once('value');
    if (snapshot.exists()) {
      const key = Object.keys(snapshot.val())[0];
      await blogsRef.child(key).remove();
      return { success: true, message: 'Data Blog berhasil dihapus' };
    } else {
      return { success: false, message: 'Data Blog tidak ditemukan' };
    }
  } catch (error) {
    throw error;
  }
};



module.exports = {
  addTulisan,
  getTulisanById,
  getAllTulisans,
  getTulisanByID,
  updateTulisanByID,
  deleteTulisanByID,
  updateTulisan,
  deleteTulisan
};
