const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // let obj = {};

  // for(let i = 0; i < str.length; i++){
  //   obj.hasOwnProperty(str[i]) ? obj[str[i]]++ : obj[str[i]] = 1;
  // }
  //  let res = "";
  //  for(let key in obj){

  //   if(obj[key] === 1){
  //     res += key;
  //   }else{
  //     res += obj[key] + key
  //   }
  //  }
  //  return res;
}

module.exports = {
  encodeLine
};
