var pool = require('../config/database');
module.exports = {
    insertUser: function (params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('INSERT INTO users (id, name, email, pwd) VALUES (?,?,?,?)', params, function (err, rows) {
                if (err){
                    callback(true, '');
                }
                callback(null, rows)
            });
            connection.release();
        })
    },
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
    getEmailByid: function (params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query('SELECT * FROM users WHERE id=?', params, function (err, rows) {
                if (err) throw err;
                if (rows[0]) callback(null, rows[0].email);
                else callback(true, '');
            });
            connection.release();
        })
    }
};