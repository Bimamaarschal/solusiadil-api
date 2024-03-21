const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/', blogController.createTulisan);
router.get('/:id', blogController.getTulisan);
router.get('/', blogController.getAllTulisans);
router.put('/:id', blogController.updateTulisan);
router.delete('/:id', blogController.deleteTulisan);

module.exports = router;
