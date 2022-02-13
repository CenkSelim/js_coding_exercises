function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) newNums.push(nums[i]);
  }
  return newNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].substring(0,1).toLowerCase() === char.toLowerCase()) newNames.push(names[i]);
  }
  return newNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0,3).toLowerCase() === "To ".toLowerCase()) verbs.push(words[i]);
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const newNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) newNums.push(nums[i]);
  }
  return newNums; 
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].data.city.displayName) cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
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
