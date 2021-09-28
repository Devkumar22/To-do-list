<<<<<<< Updated upstream
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

    var today=new Date();
    if(today.getDay() === 6 || today.getDay() === 0){
        res.send("<h1>Yay it's the weekend</h1>");
    }
    else{
        res.write("<h1>Boo! I have to work</h1>");
        res.write("<p> It's Not the Weekend</p>");
        res.send;
    }

});


app.listen(3000, function(){
    console.log("serrver started on port 3000");
});
=======
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
>>>>>>> Stashed changes
