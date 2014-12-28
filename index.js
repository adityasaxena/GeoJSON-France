var fs = require("fs");
var file = JSON.parse(fs.readFileSync("communes.geojson", "utf8"));
var express = require('express');
var app = express();
var compress = require('compression');

app.set('port', (process.env.PORT || 5000));
app.use(compress());
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/data', function(request, response) {
  response.send(file);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
