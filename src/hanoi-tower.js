const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let resObj = {
    "turns": 0,
    "seconds": 0
  }
  let step = Math.pow(2, disksNumber) -1;
  resObj.turns = step;
  let time = Math.floor(step * 3600 / turnsSpeed);
  resObj.seconds = time;

return resObj;
}

module.exports = {
  calculateHanoi
};
