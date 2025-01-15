const leapYears = function(year) {
  if ((year %  4 == 0 || year % 400 == 0) && (!(year % 100 == 0) || (year % 400 == 0)))  return true; 
  else return false;
};
/*
 take in year 
if year is divisible by 4 && 400 && !divisible by 100
return true 
if year is not divisible by 4 || 400 || divisible by 100 
return true
*/
// Do not edit below this line
module.exports = leapYears;
