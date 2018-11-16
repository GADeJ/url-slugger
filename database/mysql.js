const CONFIG = require("../config/local");

var mysql = require("mysql");

var connection = mysql.createPool({
    host:       CONFIG.DB_HOST,
    database:   CONFIG.DB_NAME,
    user:       CONFIG.DB_USER,
    password:   CONFIG.DB_PASS
});

module.exports = connection;
