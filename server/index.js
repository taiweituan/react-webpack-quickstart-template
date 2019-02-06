let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.listen(PORT, function () {
    console.log("Listening to port " + PORT);
});