var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.selectAll(function (data) {
        res.json(data)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
        // console.log(result.insertId )
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            sleepy: req.body.sleepy
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;
