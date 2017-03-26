const io = require('socket.io-client');
const config = require('./config');
const gpioOutput = require('./gpio/output');
let socket = io(config.dev.remoteServerUri);
// console.log(process.env.production);
// if(process.env.production){
//     socket = io(config.production.remoteServerUri);
// }
// else {
// }
socket.on('connect', function(){
    console.log('Connection est');
});
socket.on('power', function(data){
    gpioOutput.togglePower(data.isPowered);
});
socket.on('disconnect', function(){});