const express = require('express');
const { getAllMotorcycles } = require('../controllers/motorcycleController');
const router = express.Router();

router.get('/motorcycles', getAllMotorcycles);

module.exports = router;