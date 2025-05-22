const repeatString = function(string, num) {
  let i = 0; 
  let result = ""; 

  if (num < 0) {
    return "ERROR"; 
  } 
  else if (num == 0) {
    return ""; 
  } 
  do {
    result += string;
    i++; 
  } 
  while (i < num);
  return result; 
}
// Do not edit below this line
module.exports = repeatString;
