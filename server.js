const express= require('express');
const app= express();
var users=[];
const http = require('http');
const server= http.createServer(app);
const socket=require('socket.io');
const io=socket(server);
app.use('/',express.static('public'));
io.on('connection',function(socket){


console.log(socket.id);

socket.on('message',(data)=>{
    let user{
        name:data.name,
        id:socket.id
    }
users.push(user);
io.emit('al',{msg:   data.msg});



})


})
server.listen(5000,()=>{
    console.log('SERVER RUNNING ON 5000');
})