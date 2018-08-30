const mysql = require('mysql');

var connMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123g',
    database: 'nodemcu'
});

console.log(connMySQL);

// connect with db
connMySQL.connect();

module.exports = connMySQL;