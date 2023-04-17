const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let columns = [];


let columnSum = matrix.reduce((sum, elem) =>{
  console.log(sum, "В начале reduce")
  
  elem.map((value, index) => {
    if(value === 0){
      columns.push(index);
    }
    if(!columns.includes(index)){
      sum += value;
    }
    console.log(sum, "В map")
  })
  console.log(sum, "В конце reduce")
  return sum;
}, 0)
return columnSum;
}

module.exports = {
  getMatrixElementsSum
};
