const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/', adminController.createAdmin);
router.get('/:id', adminController.getAdmin);
router.get('/', adminController.getAllAdmins);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);
router.get('/idadmin/:id_apph', adminController.getPenggunaByID);
router.put('/idadmin/:id_apph', adminController.updatePenggunaByID);
router.post('/login', adminController.loginApph);


module.exports = router;