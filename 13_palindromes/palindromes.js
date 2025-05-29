const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const arr = str
    .toLowerCase()
    .split('') 
    .filter((char) => alphanumerical.includes(char))
    .join(''); 

  const  reversed = arr.split('').reverse().join('');
  return  arr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
