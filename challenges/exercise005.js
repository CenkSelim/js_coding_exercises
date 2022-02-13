const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const positionOfNumber = (nums.findIndex(num => num === n)); 
  if (positionOfNumber < nums.length - 1 && positionOfNumber !== -1) {
    return nums[positionOfNumber + 1];
  }else {
    return null;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const frequencies = {1:0,0:0};
  for ( let i=0; i < str.length ; i++){
    frequencies[str[i]] += 1;
  }
  return frequencies;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  const arrsSums = arrs.map(function(item) {
    return item.reduce((a, b) => a + b, 0);
  });
  return arrsSums.reduce((a, b) => a + b, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  const arrShifted = [...arr];
  if (arr.length > 1)[arrShifted[0], arrShifted[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arrShifted;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
