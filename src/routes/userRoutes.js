const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createPengguna);
router.get('/:id', userController.getPengguna);
router.get('/', userController.getAllPenggunas);
router.put('/:id', userController.updatePengguna);
router.delete('/:id', userController.deletePengguna);
router.get('/idmasyarakat/:id_masyarakat', userController.getPenggunaByNIK);
router.put('/idmasyarakat/:id_masyarakat', userController.updatePenggunaByNIK);
router.post('/login', userController.loginPengguna);

module.exports = router;
