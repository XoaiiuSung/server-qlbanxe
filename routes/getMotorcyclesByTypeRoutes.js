const express = require('express');
const router = express.Router();
const { getMotorcyclesByType } = require('../controllers/getMotorcyclesByTypeController');

router.get('/getMotorcyclesByType/:motorcycleType', getMotorcyclesByType);

module.exports = router;