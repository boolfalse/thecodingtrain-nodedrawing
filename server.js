
const express = require('express');
const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', function (socket) {
    console.log("New Connection ID: " + socket.id);
});

console.log("Server is on...");
