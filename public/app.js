var socket =io();
var dat=[];
var result= document.getElementById('result');
var name=window.prompt("ENTER YOUR NAME");
function send ()
{



var val =document.getElementById('inp').value;
socket.emit('message',{msg :  val,name:name})}
socket.on('al',(data)=>{

dat.push(data.msg);
document.createElement('li');
let li=document.createElement('li');
let text=document.createTextNode(data.msg);

li.appendChild(text);
result.appendChild(li);

})
