function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return capitalize(firstName).substring(0,1) + "." + capitalize(lastName).substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Number((originalPrice + (originalPrice * vatRate)/100).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Number((originalPrice - (originalPrice * reduction)/100).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let startPosition = (str.length / 2); // start position halfway point
  if  ((str.length % 2) === 0 ) {
    return str.substring(startPosition - 1, (startPosition + 1)); // even needs two charater
  } else {
    return str.substring(startPosition, (startPosition + 1));
  } 
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(reverseWord);
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(user => user.type === 'Linux').length; 
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return Number((scores.reduce((a,b) => (a+b)) / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (((n % 3) == 0) && ((n % 5) == 0)) return "fizzbuzz";
  if ((n % 3) == 0) return "fizz";
  if ((n % 5) == 0) return "buzz";
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
