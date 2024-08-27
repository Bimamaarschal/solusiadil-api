const express = require('express');
const router = express.Router();
const sertifikatController = require('../controllers/sertifikatController');

router.post('/', sertifikatController.createSertifikat);
router.get('/:id', sertifikatController.getSertifikat);
router.get('/', sertifikatController.getAllSertifikats);
router.put('/:id', sertifikatController.updateSertifikat);
router.delete('/:id', sertifikatController.deleteSertifikat);
router.get('/idsertifikat/:id_sertifikat', sertifikatController.getSertifikatByID);
router.get('/idapph/:id_apph', sertifikatController.getSertifikatByIDAPPH);
router.put('/idsertifikat/:id_sertifikat', sertifikatController.updateSertifikatByID);
router.delete('/idsertifikat/:id_sertifikat', sertifikatController.deleteSertifikatByID);

module.exports = router;
