const mysql = require('mysql2')

const pool = mysql.createPool({
    database : 'expense',
    user : 'root',
    password : 'Mayank@123',
    host : 'localhost'
})

module.exports = pool.promise();