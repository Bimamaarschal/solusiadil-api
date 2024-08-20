const express = require('express');
const router = express.Router();
const adminsController = require('../controllers/adminsController');

router.post('/', adminsController.createAdmins);
router.get('/:id', adminsController.getAdmins);
router.get('/', adminsController.getAllAdminss);
router.put('/:id', adminsController.updateAdmins);
router.delete('/:id', adminsController.deleteAdmins);
router.get('/idadmins/:id_admins', adminsController.getPenggunaByID);
router.put('/idadmins/:id_admins', adminsController.updatePenggunaByID);
router.post('/login', adminsController.loginAdmins);


module.exports = router;