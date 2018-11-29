//IMPORTING EXPRESS NODE MODULE
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// USING PATH PACKAGE TO ROUTE BETWEEN PAGES
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));

//BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//INITIALIZING HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("App now listening at localhost:" + PORT);
});

