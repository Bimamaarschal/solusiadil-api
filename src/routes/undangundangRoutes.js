const express = require('express');
const router = express.Router();
const undangundangController = require('../controllers/undangundangController');

router.post('/', undangundangController.createUndang);
router.get('/:id', undangundangController.getUndang);
router.get('/', undangundangController.getAllUndangs);
router.put('/:id', undangundangController.updateUndang);
router.delete('/:id', undangundangController.deleteUndang);

module.exports = router;
