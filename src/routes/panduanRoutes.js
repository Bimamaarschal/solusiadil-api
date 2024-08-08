const express = require('express');
const router = express.Router();
const panduanController = require('../controllers/panduanController');

router.post('/', panduanController.createPH);
router.get('/:id', panduanController.getPH);
router.get('/', panduanController.getAllPHs);
router.put('/:id', panduanController.updatePH);
router.delete('/:id', panduanController.deletePH);
router.get('/idpanduan/:id_panduan', panduanController.getPanduanByID);
router.put('/idpanduan/:id_panduan', panduanController.updatePanduanByID);
router.delete('/idpanduan/:id_panduan', panduanController.deletePanduanByID);

module.exports = router;
