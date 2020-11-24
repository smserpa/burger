const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerObject = { burgers: data };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne({ burger_name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = { id: req.params.id };
    const update = { devoured: req.body.value };

    burger.updateOne(update, condition, (result) => {
        if (result.affectedRows === 0) {
            return res.sendStatus(404).end();
        }
        res.sendStatus(200).end();
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = { id: req.params.id };

    burger.deleteOne(condition, (result) => {
        if (result.affectedRows === 0) {
            return res.sendStatus(404).end();
        }
        res.sendStatus(200).end();
    });
});

module.exports = router;
