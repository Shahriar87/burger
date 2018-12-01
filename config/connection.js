//CONNECTION WITH DATABASE
var mysql = require("mysql");

//ESTABLISHING DOTENV
require('dotenv').config();
var keys = require("../keys.js");

var connection;

if (process.env.JAWSDB_URL){
    connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: keys.databasecredentials.user,
        password: keys.databasecredentials.password,
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;


