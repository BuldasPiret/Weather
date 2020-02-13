const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
app.set("view engine", "ejs");

const app = express();

//Get temperature and description from openweathermap


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});