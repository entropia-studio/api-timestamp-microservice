const express = require("express")
const routes = require("./routes")
const logger = require("morgan")
const errorhandler = require('errorhandler')
var app = express()

app.use(logger("dev"))

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/timestamp/:date_string?",routes.timestamp.sendTimestamp)

app.use(errorhandler)
app.listen(8080,"localhost")