const bookModel = require('../models/bookModel');

const createBook = async (req, res, next) => {
    try {
      const { judul, pengarang, tahun, penerbit } = req.body;
      if (!judul || !pengarang || !tahun || !penerbit) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const bookData = { judul, pengarang, tahun, penerbit };
      const bookId = await bookModel.addBook(bookData);
      res.status(201).json({ message: 'Book created successfully', bookId });
    } catch (error) {
      next(error);
    }
  };
  

const getBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await bookModel.getBookById(bookId);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookModel.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;
    await bookModel.updateBook(bookId, bookData);
    res.status(200).json({ message: 'Book updated successfully', bookId });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    await bookModel.deleteBook(bookId);
    res.status(200).json({ message: 'Book deleted successfully', bookId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook
};
