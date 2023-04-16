const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let arr = Array.from(n.toString());

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      arr.splice(i - 1, 1);
      return Number(arr.join(""));
    } else if (i - 1 === 0) {
      arr.splice(i, 1);
      return Number(arr.join(""));
    }
  }
}

module.exports = {
  deleteDigit,
};
