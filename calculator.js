const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

  var kilos = Number(req.body.kilos);
  var height = Number(req.body.height);

  var result = Math.floor(kilos/(height*height));

  if(result > 25){
    res.send("Your BMI is " + result + " you need to loose weight!");
  } else{
    res.send ("Your BMI is " + result + " which is healthy");
  }

})

app.get("/index", function(req, res){
  res.sendFile(__dirname + "/index.html");
})


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
