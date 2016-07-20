var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
io = require('socket.io').listen(app),
fs = require('fs');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

app.listen(3000, function(req, res){
  console.log("server is now listening on port 3000");
});


app.use(express.static('public'));
