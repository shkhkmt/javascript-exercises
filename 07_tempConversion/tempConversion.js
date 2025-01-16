const convertToCelsius = function(temperature) {
  let output = ((temperature - 32) * (5/9));  
  let rounded = Math.round(output *10) / 10; 
  return rounded; 
};

const convertToFahrenheit = function(temperature) {
  let output = ((temperature * (9/5) + 32));  
  let rounded = Math.round(output * 10) / 10; 
  return rounded; 
}; 
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
