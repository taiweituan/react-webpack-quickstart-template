let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();
let PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../public")));
app.listen(PORT, function () {
    console.log("Listening to port " + PORT);
});

app.get("/hello", function (req, res) {
    res.send("Hello World!");
});