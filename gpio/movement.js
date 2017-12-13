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
function readyForNext(time = 800) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

let moveForward = (time) => {
  makePulse(motorLeft1,244, time);
  makePulse(motorRight1,244, time);
  return readyForNext(time);
};
let moveBackward = (time) => {
  makePulse(motorLeft2,244, time);
  makePulse(motorRight2,244, time);
  return readyForNext(time);

};

let moveRight = (time) => {
  makePulse(motorRight1,0 , time);
  makePulse(motorLeft1, 244, time);
  return readyForNext(time);
};
let moveLeft = (time) => {
  makePulse(motorLeft1,0 , time);
  makePulse(motorRight1,244, time);
  return readyForNext(time);
};

module.exports = {
  moveForward,
  moveBackward,
  moveRight,
  moveLeft
};
