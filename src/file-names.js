const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let arrRes = names.reduce((sum, elem) => {
  
    if(!sum.includes(elem)){
      sum.push(elem);
      console.log(sum);
      
    }else{
      let index = 1;
      let elemCount = `${elem}(${index})`;
      console.log(elemCount, "elemCount");
      console.log(!sum.includes(elemCount), "!sum.includes(elemCount)");
      
      if(!sum.includes(elemCount)){
        sum.push(elemCount);
        
      }else{
        
        while(sum.includes(elemCount)){
          console.log(index, "index");
          console.log(elemCount, "elemCount");
          index++;
          elemCount = `${elem}(${index})`;
        }
        
      sum.push(elemCount);
      }
    }
  
    return sum
  }, []);

  return arrRes;
}

module.exports = {
  renameFiles
};
