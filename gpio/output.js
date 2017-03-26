const rpio = require('rpio');
rpio.open(16,rpio.OUTPUT,rpio.LOW);
 let togglePower = (value) => {
     value = value ? rpio.HIGH : rpio.LOW;
     rpio.write(16, value);
     console.log('value written');
};

module.exports = {
    togglePower
};
