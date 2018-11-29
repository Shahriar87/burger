var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});

module.exports = router;
