var express = require('express')
var app = express();
var path = require("path");
var router = express.Router();
var done = require('./client/data/done.json');
console.log(done);
app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
  res.send('/index.html');
});

app.listen(8888);