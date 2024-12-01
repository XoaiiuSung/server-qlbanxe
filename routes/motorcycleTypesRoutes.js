const express = require('express');
const router = express.Router();
const { getAllMotorcycleTypes } = require('../controllers/motorcycleTypesController');

router.get('/motorcycleTypes', getAllMotorcycleTypes);

module.exports = router;