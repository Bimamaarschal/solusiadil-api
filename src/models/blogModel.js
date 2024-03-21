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

module.exports = {
  addTulisan,
  getTulisanById,
  getAllTulisans,
  updateTulisan,
  deleteTulisan
};
