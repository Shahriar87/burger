//IMPORTING ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function(column1, column2, cb) {
        orm.insertOne(column1, column2, function(res){
            cb(res);
        })
    },

    updateOne: function(bool, id, cb) {
        orm.updateOne(bool, id, function(res){
            cb(res);
        })
    }
};

module.exports = burger;
