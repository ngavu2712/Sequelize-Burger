
var burgers = require('../models/burger')

var express = require('express');

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();


router.get("/", function(req,res){
    burgers.selectAll(function(burgerdb){
        res.render("index", {burgers : burgerdb})
    })
});

//Add new burgers to burgerdb from user input
router.post("/api/burgers", function (req,res) {
//router.post("/burgers", function (req,res) {
    req.body.Devoured = false;
    burgers.insertOne(['Burger_name', 'Devoured'], [req.body.Burger_name, req.body.Devoured], function(burgerdb){
        //Send back the id of the new burger
        res.json({id: burgerdb.insertId})
    })
});

router.put('/api/burgers/:id', function (req,res){
    var id = req.params.id;
   
    req.body.Devoured = true;
    burgers.updateOne( ["Devoured", "id"], [true,id], function(burgerdb){
        if (burgerdb.changedRows == 0){
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});






module.exports = router;