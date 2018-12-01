//IMPORTING ORM
var orm = require("../config/orm.js");

//CREATING BURGER MODEL OBJECT
var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function(column1, cb) {
        orm.insertOne(column1, function(res){
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
