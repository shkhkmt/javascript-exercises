const reverseString = function(string) {
  const stringToArray = string.split(""); 
  const reversed = stringToArray.reverse(); 
  const reversedString = reversed.join("");
  return reversedString; ; 
};
// Do not edit below this line
module.exports = reverseString;
