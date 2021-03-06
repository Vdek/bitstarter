var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

//var buf = new Buffer(fs.readFileSync('index.html', 'utf8'), "utf-8");


app.get('/', function(request, response) {
  response.send(Buffer(fs.readFileSync('index.html', 'utf8'), "utf-8").toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
