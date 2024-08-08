const express = require('express');
const router = express.Router();
const apphController = require('../controllers/apphController');

router.post('/', apphController.createAph);
router.get('/:id', apphController.getAph);
router.get('/', apphController.getAllAphs);
router.put('/:id', apphController.updateAph);
router.delete('/:id', apphController.deleteAph);
router.get('/idapph/:id_apph', apphController.getPenggunaByID);
router.put('/idapph/:id_apph', apphController.updatePenggunaByID);
router.post('/login', apphController.loginApph);


module.exports = router;