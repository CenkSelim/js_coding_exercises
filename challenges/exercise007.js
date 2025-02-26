/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  return (n).toString().split("").map(Number).reduce((a,b) => a+b,0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step=1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  const arrOfNumbers = [];
  let index = start;
  do {
    arrOfNumbers.push(index);
    index += step;
  } while(index < end);
  arrOfNumbers.push(end);
  return arrOfNumbers;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 * @param {String} date
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  const MAX_SCREEN_TIME =100;
  const alertUsers =[];
  users.forEach( user => {
    user.screenTime.forEach( screenTimeLog => {
      if(screenTimeLog.date === date){
        let totalScreenTime=0;
        Object.values(screenTimeLog.usage).forEach(val => totalScreenTime += val);
        if(totalScreenTime > MAX_SCREEN_TIME) {alertUsers.push(user.username);}
      }  
    });       
  });
  return alertUsers;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (!hexStr.match(/#[A-Fa-f0-9]{6}/g)) throw new Error("hexStr not in correct format");
  return "rgb(" + Number("0x"+hexStr.substring(1,3))+ "," + Number("0x"+hexStr.substring(3,5))+ "," + Number("0x"+hexStr.substring(5))+")";
}

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  const WINNING_POSITIONS = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
  const X_PLAYER = "X";
  const O_PLAYER = "0";
  const NO_CURRENT_WINNER = null;
  let winner = NO_CURRENT_WINNER;
  const xPositions = board.flat().reduce(function(array, element, index) {
                                    if (element === 'X')
                                        array.push(index);
                                    return array;
                            }, []);

  const oPositions = board.flat().reduce((array, element, index) => {
                                    if (element === '0')
                                        array.push(index);
                                    return array;
                            }, []);

  if(xPositions.length < 3 && oPositions.length < 3) return winner; 
  
  for(let positions of WINNING_POSITIONS){
    if(positions.every(position => {return xPositions.indexOf(position) !== -1;})) winner=X_PLAYER;
    if(positions.every(position => {return oPositions.indexOf(position) !== -1;})) winner=O_PLAYER;
    if(winner !== null) break;
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
