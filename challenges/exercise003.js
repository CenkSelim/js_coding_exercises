function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n * n);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsCopy = [...words]; // so as not to update original
  wordsCopy.forEach((item, index) => wordsCopy[index] = item.substring(0,1).toUpperCase() + item.substring(1)); 
  return wordsCopy.join("").substring(0,1).toLowerCase() + wordsCopy.join("").substring(1);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const numberOfSubjects = people.reduce((counter, obj) => {
        counter += obj.subjects.length
        return counter;
        }, 0);
  return numberOfSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  const count = menu.reduce((counter, obj) => {
        if (obj.ingredients.includes(ingredient)) counter += 1
        return counter;
        }, 0);
  return count !== 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const duplicates = [];
  arr1.forEach( function (i) { 
    if(arr2.indexOf(i) !== -1) {
      duplicates.push(i);
    } 
  });
  return [... new Set(duplicates.sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
