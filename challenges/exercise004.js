function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newNums = [];

  nums.forEach(function(item) {
    if (item < 1) newNums.push(item);
  });
  return newNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newNames = [];

  names.forEach(function(item) {
    if (item.substring(0,1).toLowerCase() === char.toLowerCase()) newNames.push(item);
  });
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];

  words.forEach(function(item) {
    if (item.substring(0,3).toLowerCase() === "To ".toLowerCase()) verbs.push(item);
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const newNums = [];

  nums.forEach(function(item) {
    if (Number.isInteger(item)) newNums.push(item);
  });
  return newNums; 
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];

  users.forEach(function(item) {
     cities.push(item.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = [];

  nums.forEach(function(item) {
    squareRoots.push(Math.round(Math.sqrt(item)*100)/100);
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const newSentences = [];

  sentences.forEach(function(item) {
    if (item.toLowerCase().indexOf(str.toLowerCase()) !== -1) newSentences.push(item);
  });
  return newSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];

  triangles.forEach(function(item) {
    longestSides.push(Math.max(...item));
  });  
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
