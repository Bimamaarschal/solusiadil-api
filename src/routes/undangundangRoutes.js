const express = require('express');
const router = express.Router();
const undangundangController = require('../controllers/undangundangController');

router.post('/', undangundangController.createUndang);
router.get('/:id', undangundangController.getUndang);
router.get('/', undangundangController.getAllUndangs);
router.put('/:id', undangundangController.updateUndang);
router.delete('/:id', undangundangController.deleteUndang);
router.get('/idundangundang/:id_uu', undangundangController.getUndangByID);
router.put('/idundangundang/:id_uu', undangundangController.updateUndangByID);
router.delete('/idundangundang/:id_uu', undangundangController.deleteUndangByID);

module.exports = router;
