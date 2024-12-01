const express = require('express');
const router = express.Router();
const { getAllInventoryMotorcycles } = require('../controllers/getAllInventoryMotorcyclesController');

router.get('/getAllInventoryMotorcycles', getAllInventoryMotorcycles);

module.exports = router;