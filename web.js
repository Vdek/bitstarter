var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);

var text = fs.readFileSync('index.html', 'utf8');


app.get('/', function(request, response) {
  response.send(Buffer.toString(text, "utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
