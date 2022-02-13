function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  words.forEach((item, index) => words[index] = item.substring(0,1).toUpperCase() + item.substring(1)); 
  return words.join("").substring(0,1).toLowerCase() + words.join("").substring(1);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
