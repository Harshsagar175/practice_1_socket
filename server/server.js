const app = require('express');
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server , {
    cors : {
        origin: '*'
    }
});

io.on("connection" , (socket) => {
    socket.on("chat" , (payload) => {
        io.emit("chat" , payload);
    });
});

server.listen(5000 , () => {
    console.log("server is listening at port 5000 ...")
})

