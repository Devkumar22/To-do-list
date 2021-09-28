
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today=new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
 
    var day = today.toLocaleDateString("en-US", options);

    
    res.render("list", {
        kindofDay: day
    });

});


app.listen(3000, function(){
    console.log("serrver started on port 3000");
});
