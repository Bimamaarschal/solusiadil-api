const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/', adminController.createMadmin);
router.get('/:id', adminController.getMadmin);
router.get('/', adminController.getAllMadmins);
router.put('/:id', adminController.updateMadmin);
router.delete('/:id', adminController.deleteMadmin);

module.exports = router;
