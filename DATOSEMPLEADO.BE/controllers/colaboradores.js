const { response } = require('express');
const connection = require('../src/conexion');


const getAll = async (req, res) => {
    connection.connect(function (err) {
        if (err) {
            return res.status(500).json({
                status:false,
                err: err.stack
            });
        }
        let sql = 'SELECT * FROM colaborador';
        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: false,
                    err
                });
            }
            res.status(200).json({
                status: true,
                result
            });
        });
    });
}

module.exports = {
    getAll
}