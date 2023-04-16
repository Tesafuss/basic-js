const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let copy = arr;
  let result = [];

  arr.map((elem, index) => {
    switch (elem) {
      case "--double-next":
        if (index < copy.length-1 && typeof copy[index + 1] !== "string") {
          result.push(copy[index + 1]);
        }
        break;
      case "--discard-next":
        if (index < copy.length-1 && typeof copy[index + 1] !== "string") {
          copy.splice(index + 1, 1);
        }
        break;
      case "--double-prev":
        if (index > 0 && typeof copy[index - 1] !== "string") {
          result.push(copy[index - 1]);
        }
        break;
      case "--discard-prev":
        if (index > 0 && typeof copy[index - 1] !== "string") {
          result.splice(index - 1, 1);
        }
        break;
        default:
          if(elem !== undefined)
          result.push(elem);
    }
  })
    
  return result;
}

module.exports = {
  transform,
};
