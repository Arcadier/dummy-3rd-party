const express = require('express');
const bodyparser = require("body-parser");

const app = express();
app.use(require("morgan")("dev"));
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());


//receives payload from arcadier event trigger
app.post("/webhook", (req, res) => {

    console.log(req.body);
    res.send({ "ain't nothing": "but a heartache" });

});

app.get("/", (req, res) => {
    
    res.send("Use a POST request with \"https://dummy-3rd-party.herokuapp.com/webhook\", send any JSON object, e.g { \"Payload\": \"Sent\" } and excpect the response: { \"message\": \"Payload Received\" }.")
    console.log("received");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Express server listning on port ");
});
