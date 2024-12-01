const express = require('express');
const app = express();
require('dotenv').config();
const motorcycleRoutes = require('./routes/motorcycleRoutes');
const getAllInventoryMotorcyclesRoutes = require('./routes/getAllInventoryMotorcyclesRoutes');
const motorcycleTypesRoutes = require('./routes/motorcycleTypesRoutes');
const getMotorcyclesByTypeRoutes = require('./routes/getMotorcyclesByTypeRoutes'); 
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(motorcycleRoutes);
app.use(getAllInventoryMotorcyclesRoutes);
app.use(motorcycleTypesRoutes);
app.use(getMotorcyclesByTypeRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});