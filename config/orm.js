//IMPORTING CONNECTION TO ORM
var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (column1, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [column1], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (bool, id, cb) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [bool, id], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;