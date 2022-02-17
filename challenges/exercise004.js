function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const newNums = nums.filter(function(item) {
    if (item < 1) return item;
  });
  return newNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const newNames = names.filter(function(item) {
    if (item.substring(0,1).toLowerCase() === char.toLowerCase()) return item;
  });
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter(function(item) {
    if (item.substring(0,3).toLowerCase() === "To ".toLowerCase()) return item;
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const newNums = nums.filter(function(item) {
    if (Number.isInteger(item)) return item;
  });
  return newNums; 
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = users.map(function(item) {
    return item.data.city.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map(function(item) {
    return Number(Math.sqrt(item).toFixed(2));
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const newSentences = sentences.filter(function(item) {
    if (item.toLowerCase().indexOf(str.toLowerCase()) !== -1) return item;
  });
  return newSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = triangles.map(function(item) {
    return Math.max(...item);
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
