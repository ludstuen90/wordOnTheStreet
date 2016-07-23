var express = require('express');
var app = express();
var socketio  = require('socket.io');
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

var server = app.listen(3000, function(req, res){
  console.log("server is now listening on port 3000");
});

var io = require('socket.io').listen(server);



io.sockets.on('connection', function (socket) {
console.log('a user is connected');

socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


io.sockets.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);

  });
});


app.use(express.static('public'));
