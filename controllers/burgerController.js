
 var db = require('../models')

var express = require('express');

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();


router.get("/", function(req,res){
    db.Burger.findAll().then(function(burgerdb){
        console.log(burgerdb)
        res.render("index", {burgers : burgerdb})
    })
  
});

//Add new burgers to burgerdb from user input
router.post("/api/burgers", function (req,res) {
//router.post("/burgers", function (req,res) {
    //req.body.Devoured = false;
    db.Burger.create({
        Burger_name: req.body.Burger_name,
        Devoured: req.body.Devoured
    }).then(function(burgerdb){
        //Send back the id of the new burger
        res.json({id: burgerdb.insertId})
    })
});

router.put('/api/burgers/:id', function (req,res){
    var id = req.params.id;
   
    req.body.Devoured = true;
    db.Burger.update(
        {
        Burger_name: req.body.text,
        Devoured: req.body.Devoured
        },
        { where : {
            id: id
        }
    }).then(function(burgerdb){
        res.json(burgerdb)
    })
       
});






module.exports = router;