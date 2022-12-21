let temp;
let newTemp;

const convertToCelsius = function(temp) {
  newTemp = (temp - 32) / 1.8;
  if (Number.isInteger(newTemp)) return newTemp;
  else {
    return Math.round(newTemp*10)/10;
  }
};

const convertToFahrenheit = function(temp) {
  newTemp = (temp * 1.8) + 32;
  if (Number.isInteger(newTemp)) return newTemp;
  else {
    return Math.round(newTemp*10)/10;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
