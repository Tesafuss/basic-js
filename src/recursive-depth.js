const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!(arr instanceof Array)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let max_deep = 1;

    arr.map((elem, index) => {
      let deep = 1;

      if(Array.isArray(elem)){
        deep += this.calculateDepth(elem);
      }
      if(deep > max_deep){
        max_deep = deep;
      }
    })
    return max_deep;
  }
}

module.exports = {
  DepthCalculator
};
