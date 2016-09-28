var pool = require('../config/database');
module.exports = {
    insertUser: function (params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('INSERT INTO users SET ?', params, function (err, rows) {
                callback(err, rows)
            });
            connection.release();
        })
    },
    selectNameByLogin: function (params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT name FROM users WHERE id=? OR name=? OR email=?', params, function (err, rows) {
                callback(err, rows)
            });
            connection.release();
        })
    }
};