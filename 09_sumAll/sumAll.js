const sumAll = function(integerOne, integerTwo) {
  let output = 0;

  if (!Number.isInteger(integerOne) || !Number.isInteger(integerTwo)) {
    output = 'ERROR'; 
  } 
  else if (isNaN(integerOne) || isNaN(integerTwo)) {
    output = 'ERROR'; 
  } 
  else if (integerOne < 0 || integerTwo < 0) {
    output = 'ERROR';
  }
  else if (integerOne < integerTwo) {
      for (let i = integerOne; i <= integerTwo; i++){
        output += i; 
    } 
  } 
  else if (integerOne > integerTwo) {
      for (let i = integerTwo; i <= integerOne; i++) {
        output += i; 
      }
  } return output;  
} 


module.exports = sumAll; 
