const express = require('express');
const app = express();
const motorcycleRoutes = require('./routes/motorcycleRoutes');
const morgan = require('morgan');
require('dotenv').config();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(motorcycleRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});