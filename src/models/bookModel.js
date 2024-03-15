const firebaseAdmin = require('../models/firebaseConfig');

const db = firebaseAdmin.database();
const booksRef = db.ref('books');

const addBook = async (bookData) => {
  try {
    const newBookRef = booksRef.push();
    await newBookRef.set(bookData);
    return newBookRef.key;
  } catch (error) {
    throw error;
  }
};

const getBookById = async (bookId) => {
  try {
    const snapshot = await booksRef.child(bookId).once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const getAllBooks = async () => {
  try {
    const snapshot = await booksRef.once('value');
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

const updateBook = async (bookId, bookData) => {
  try {
    await booksRef.child(bookId).update(bookData);
    return bookId;
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (bookId) => {
  try {
    await booksRef.child(bookId).remove();
    return bookId;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBook,
  getBookById,
  getAllBooks,
  updateBook,
  deleteBook
};
