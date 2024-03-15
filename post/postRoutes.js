const express = require('express');
const router = express.Router();
const postController = require('./postController');

// Endpoint untuk membuat posting baru
router.post('/', postController.createPost);

// Endpoint untuk mendapatkan semua posting
router.get('/', postController.getAllPosts);

// Endpoint untuk mendapatkan satu posting berdasarkan ID
router.get('/:id', postController.getPostById);

// Endpoint untuk memperbarui posting berdasarkan ID
router.put('/:id', postController.updatePost);

// Endpoint untuk menghapus posting berdasarkan ID
router.delete('/:id', postController.deletePost);

module.exports = router;