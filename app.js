const io = require('socket.io-client');
const config = require('./config');
const gpioOutput = require('./gpio/output');
const { moveLeft, moveForward, moveBackward, moveRight } = require('./gpio/movement');
let socket = io(config.dev.remoteServerUri);

(async () => {
  while (true) {
    await moveBackward(3000);
  }
})();


socket.on('connect', function(){
  console.log('Connection est');
});
socket.on('power', function(data){
  moveForward(3000);
});

const TIME = 3000;

socket.on('left', moveLeft);
socket.on('right', moveRight);
socket.on('forward', moveForward);
socket.on('backward', moveBackward);

socket.on('move',async (data) => {
  console.log(data);
  for(let i =0; i<data.length; i++) {
     const cmd = data[i];
     switch (cmd) {
       case 'forward':
         await moveForward(TIME);
         break;
       case 'backward':
         await moveBackward(TIME);
         break;
       case 'right':
         await moveRight(TIME);
         break;
       case 'left':
         await moveLeft(TIME);
     }
  }
});

socket.on('disconnect', function(){});