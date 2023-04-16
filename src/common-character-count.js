const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let short = str1.length > str2.length ? Array.from(str2) : Array.from(str1);
  let long = str1.length > str2.length ? Array.from(str1) : Array.from(str2);

  let length = long.length;

  short.map((elem) => {
    let index = long.indexOf(elem);
      
    if (long.indexOf(elem) !== -1) {
    long.splice(index, 1);
    }
 });
  return length - long.length;
}

module.exports = {
  getCommonCharacterCount,
};
