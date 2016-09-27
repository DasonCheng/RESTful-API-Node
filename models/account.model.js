var pool = require('../config/database');
module.exports = {
    getName: function (callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users', function (err, rows) {
                if (err) throw err;
                callback(null, rows[0].name)
            });
            connection.release();
        })
    },
    getEmailByid: function (id,callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users WHERE id=?', id, function (err, rows) {
                if (err) throw err;
                if (rows[0]) callback(null, rows[0].email);
                else callback(true, '');
            });
            connection.release();
        })
    }
};