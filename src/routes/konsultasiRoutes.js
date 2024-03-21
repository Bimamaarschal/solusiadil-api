const express = require('express');
const router = express.Router();
const konsultasiController = require('../controllers/konsultasiController');

router.post('/', konsultasiController.createKonsul);
router.get('/:id', konsultasiController.getKonsul);
router.get('/', konsultasiController.getAllKonsuls);
router.put('/:id', konsultasiController.updateKonsul);
router.delete('/:id', konsultasiController.deleteKonsul);

module.exports = router;
