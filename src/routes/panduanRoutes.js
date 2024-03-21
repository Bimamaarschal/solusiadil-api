const express = require('express');
const router = express.Router();
const panduanController = require('../controllers/panduanController');

router.post('/', panduanController.createPH);
router.get('/:id', panduanController.getPH);
router.get('/', panduanController.getAllPHs);
router.put('/:id', panduanController.updatePH);
router.delete('/:id', panduanController.deletePH);

module.exports = router;
