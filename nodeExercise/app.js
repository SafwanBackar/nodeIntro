var express = require("express")

var app = express();

app.get("/", function (req, res) {
    res.send("Hi")
})


app.get("/speak/:animalName", function (req, res) {
    var sounds = {
        pig: "oink", cow: "moo", dog: 'woof woof'
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal]


    res.send("The " + animal + " says " + sound)

})

app.get('/repeat/:message/:times', function (req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i < times; i++) {
        result += message + ' ';
    }

    res.send(result)

})

app.get('*', function (req, res) {
    res.send("Page not found");
})

app.listen(4400, function () {
    console.log("Server has started")
})