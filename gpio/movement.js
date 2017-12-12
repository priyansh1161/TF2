let Gpio = require('pigpio').Gpio;
let motorLeft1 = new Gpio(12, {mode: Gpio.OUTPUT}); // 31
let motorLeft2 = new Gpio(6, {mode: Gpio.OUTPUT}); //  32
let motorRight1 = new Gpio(13, {mode: Gpio.OUTPUT});// 33
let motorRight2 = new Gpio(19, {mode: Gpio.OUTPUT});//35

function makePulse(pin, width = 244 , time = 800) {
  let interval =  setInterval(function () {
    pin.pwmWrite(width);
  }, 20);
  setTimeout(() =>{
    pin.pwmWrite(0);
    clearInterval(interval)
  }, time);
}

let togglePower = (value) => {

};

let moveForward = () => {
  makePulse(motorLeft1);
  makePulse(motorRight1);
};
let moveBackward = () => {
  makePulse(motorLeft2);
  makePulse(motorRight2);
};

let moveRight = () => {
  console.log('in right');
  makePulse(motorRight1,130);
  makePulse(motorLeft1);

};
let moveLeft = () => {
  makePulse(motorLeft1,130);
  makePulse(motorRight1);
};

module.exports = {
  togglePower,
  moveForward,
  moveBackward,
  moveRight,
  moveLeft
};
