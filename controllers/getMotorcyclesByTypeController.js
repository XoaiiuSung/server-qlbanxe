const { getPool } = require('../config/database');

const getMotorcyclesByType = async (req, res) => {
    const motorcycleType = req.params.motorcycleType;
    try {
        const pool = await getPool();
        const result = await pool.request()
            .input('motorcycleType', motorcycleType)
            .query(`
                SELECT DISTINCT XeMay.*
                FROM XeMay
                INNER JOIN Loai ON XeMay.MaLoai = Loai.MaLoai
                WHERE Loai.MaLoai = @motorcycleType
            `);
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = { getMotorcyclesByType };