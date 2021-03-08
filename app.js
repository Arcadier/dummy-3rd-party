const express = require('express');
const bodyparser = require("body-parser");
const path = require("path");



const app = express();
app.use(require("morgan")("dev"));
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());


//receives payload from arcadier event trigger
app.post("/webhook", (req, res) => {

    console.log(req.body);
    res.send("Payload received");

});