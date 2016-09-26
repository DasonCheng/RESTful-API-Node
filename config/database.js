var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'origin',
    password: 'Origin1314user..',
    database: 'blog_myour'
});
module.exports = pool;