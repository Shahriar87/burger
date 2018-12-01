var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgers = {
            burgers: data
        };
        // console.log(burgers);
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

    console.log("====================")
    console.log(req.params.id);
    console.log(req.body);
    console.log("====================")

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        req.params.id,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.put("/api/burgers", function (req, res) {

    console.log("====================")
    console.log(req.params.id);
    console.log(req.body);
    console.log("====================")

    burger.updateAll(
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );

});

module.exports = router;
