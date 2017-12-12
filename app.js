const io = require('socket.io-client');
const config = require('./config');
const gpioOutput = require('./gpio/output');
const { moveLeft, moveForward, moveBackward, moveRight } = require('./gpio/movement');
let socket = io(config.dev.remoteServerUri);

socket.on('connect', function(){
  console.log('Connection est');
});
socket.on('power', function(data){
  moveForward(3000);
});

socket.on('left', moveLeft);
socket.on('right', moveRight);
socket.on('forward', moveForward);
socket.on('backward', moveBackward);

socket.on('move',async (data) => {
  for(let i =0; i<data.length; i++) {
     const cmd = data[i];
     if(cmd === 'forward') {
         await moveForward();
     }
  }
});

socket.on('disconnect', function(){});