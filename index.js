var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res) {

	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

    io.emit('chat-message', "User has connected");

    socket.on('disconnect', function () {
        io.emit('chat-message', "User has disconnected");
    });

    socket.on('chat-message', function(msg){
        
        io.emit('chat-message', msg);
    });

});

http.listen(3000, function() {

	console.log('Listening on 3000');
});
