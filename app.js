const express = require('express');

const app = express()
.set('views', 'views')
  .use(express.static('app/src'))


const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 1200;
const fs = require('fs');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

let meatBurger = 0;
let veganBurger = 0;

io.on('connection', function(socket){

// socket.on('warning', function(){
// io.emit('warning')
// })

// socket.on('chat message', function(msg){
//     io.emit('chat message', {substance:msg, shun:shunList});
//   })

socket.on('add', function(data){
    if(data.type === "vegan"){
      veganBurger+=1;
      io.emit('add', {meatcount: veganBurger, name: data.name, type: data.type});
    }else{
      meatBurger+=1;
      io.emit('add', {meatcount: meatBurger, name: data.name, type: data.type});
    }
  })

  socket.emit('joined', {Mnumber: meatBurger, Vnumber: veganBurger})

  socket.on('remove', function(data){
    if(data.type === "vegan"){
      veganBurger-=1;
      io.emit('remove', {meatcount: veganBurger, name: data.name, type: data.type});
    }else{
      meatBurger-=1;
      io.emit('remove', {meatcount: meatBurger, name: data.name, type: data.type});
    }
  })

// socket.on('reset', function(){
//   console.log("someone tried to reset")
//   meatBurger = 0;
//   veganBurger = 0;
//   io.emit('reset');
//   })
// socket.on('shunner', function(xoUser){
//     userList.push(xoUser)
//     console.log(xoUser)
//     io.emit('shunner', {xo:xoUser, list:shunList});
//   })

});



http.listen((process.env.PORT || 3500), () => console.log(`Example app listening on port ${port}!`))
