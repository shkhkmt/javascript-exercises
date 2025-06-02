const fibonacci = function(countArg) {
  let count; 
  // make sure the input argument is a value.
  if (typeof countArg !== 'number') {
    count = parseInt(countArg)
    }
  else {
    count = countArg; 
  }

  if (count < 0) return "OOPS"; 
  if (count === 0) return 0; 

  // define arr with 1st two points in sequence;
  let arr = [ 0, 1 ];
  // loop from the 1st unknown position
  for (let i = 2; i <= count; i++) {
    // add the last two positions 
    arr[i] = arr[i-1] + arr[i-2]; 
  }
  return arr[count];
};


// Do not edit below this line
module.exports = fibonacci;
