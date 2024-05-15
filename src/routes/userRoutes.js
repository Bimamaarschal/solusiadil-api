const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.loginPengguna);
router.post('/', userController.createPengguna);
router.get('/:id', userController.getPengguna);
router.get('/', userController.getAllPenggunas);
router.put('/:id', userController.updatePengguna);
router.delete('/:id', userController.deletePengguna);
router.get('/idmasyarakat/:id_masyarakat', userController.getPenggunaByNIK);

module.exports = router;
