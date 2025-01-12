const removeFromArray = function(array, ...removedObjects) {
  return array.filter(item => !removedObjects.includes(item)); 
};
// Do not edit below this line
module.exports = removeFromArray;

/*
PSEUDOCODE 

CREATE Object containing array and number to be removed. 
ASSIGN Array object to new Array.
REMOVE parameter given in intial argument from array. 
RETURN Array with argument removed. 
*/
