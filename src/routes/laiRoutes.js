const express = require('express');
const router = express.Router();
const laiController = require('../controllers/laiController');

router.post('/', laiController.createLembaga);
router.get('/:id', laiController.getLembaga);
router.get('/', laiController.getAllLembagas);
router.put('/:id', laiController.updateLembaga);
router.delete('/:id', laiController.deleteLembaga);

module.exports = router;
