const { getPool } = require('../config/database');

const getAllMotorcycles = async (req, res) => {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT * FROM XeMay');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};

module.exports = { getAllMotorcycles };