const blogModel = require('../models/blogModel');

const createTulisan = async (req, res, next) => {
    try {
      const { id_blog, id_apph, nama_apph, tanggal, judul, isi, tag, status, id_uu, undang_undang, doc_pendukung } = req.body;
      if ( !id_blog || !id_apph || !nama_apph || !tanggal || !judul || !isi || !tag || !status || !id_uu || !undang_undang || !doc_pendukung ) {
        return res.status(400).json({ message: 'Kesalahan Dalam Menyimpan Data' });
      }
      const blogData = { id_blog, id_apph, nama_apph, tanggal, judul, isi, tag, status, id_uu, undang_undang, doc_pendukung };
      const blogId = await blogModel.addTulisan(blogData);
      res.status(201).json({ message: 'Data Berhasil di Simpan - Server Solusi Adil', blogId });
    } catch (error) {
      next(error);
    }
  };
  

const getTulisan = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await blogModel.getTulisanById(blogId);
    if (!blog) {
      res.status(404).json({ message: 'Data Tidak Tersedia' });
    } else {
      res.status(200).json(blog);
    }
  } catch (error) {
    next(error);
  }
};

const getAllTulisans = async (req, res, next) => {
  try {
    const blogs = await blogModel.getAllTulisans();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

const updateTulisan = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blogData = req.body;
    await blogModel.updateTulisan(blogId, blogData);
    res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', blogId });
  } catch (error) {
    next(error);
  }
};

const deleteTulisan = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    await blogModel.deleteTulisan(blogId);
    res.status(200).json({ message: 'Data Berhasil di Hapus', blogId });
  } catch (error) {
    next(error);
  }
};

const getTulisanByID = async (req, res, next) => {
  try {
    const { id_blog } = req.params;
    if (!id_blog) {
      return res.status(400).json({ message: 'id_blog parameter is required' });
    }
    const blogData = await blogModel.getTulisanByID(id_blog);
    if (!blogData) {
      return res.status(404).json({ message: 'blogData not found' });
    }
    res.status(200).json(blogData);
  } catch (error) {
    next(error);
  }
};

const updateTulisanByID = async (req, res, next) => {
  try {
    const id_blog = req.params.id_blog;
    const blogData = req.body;
    const result = await blogModel.updateTulisanByID(id_blog, blogData);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Perbarui dan di Simpan - Server Solusi Adil', id_blog });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};

const deleteTulisanByID = async (req, res, next) => {
  try {
    const id_blog = req.params.id_blog;
    const result = await blogModel.deleteTulisanByID(id_blog);

    if (result.success) {
      res.status(200).json({ message: 'Data Berhasil di Hapus - Server Solusi Adil', id_blog });
    } else {
      res.status(404).json({ message: result.message });
    }
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createTulisan,
  getTulisan,
  getAllTulisans,
  updateTulisan,
  getTulisanByID,
  updateTulisanByID,
  deleteTulisanByID,
  deleteTulisan
};
