var express = require('express')
var app = express();
var path    = require("path");
var router = express.Router();
var dt = require('./publick/data/data.json')
app.use(express.static(__dirname + '/publick'));

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/dt/', function(req, res) {
  console.log(req.body);
  res.json(dt)
});


app.listen(8888);