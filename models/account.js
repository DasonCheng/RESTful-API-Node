var mysql = require('mysql');
var database = require('../config/database');
var pool = mysql.createPool(database.conf);
module.exports = {
    getName: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users', function (err, rows) {
                if (err) throw err;
                res.send(rows[0].name)
            });
            connection.release();
        })
    },
    postName: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users WHERE id=555555', function (err, rows) {
                if (err) throw err;
                if (rows[0]) res.send(rows[0].name);
                else res.send('err');
            });
            connection.release();
        })
    },
    getEmail: function (req, res, next) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users', function (err, rows) {
                if (err) throw err;
                res.send(rows[0].email)
            });
            connection.release();
        })
    }
};