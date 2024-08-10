const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/beritaController');

router.post('/', beritaController.createBerita);
router.get('/:id', beritaController.getBerita);
router.get('/', beritaController.getAllBeritas);
router.put('/:id', beritaController.updateBerita);
router.delete('/:id', beritaController.deleteBerita);
router.get('/idberita/:id_berita', beritaController.getBeritaByID);
router.put('/idberita/:id_berita', beritaController.updateBeritaByID);
router.delete('/idberita/:id_berita', beritaController.deleteBeritaByID);

module.exports = router;
