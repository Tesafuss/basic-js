const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let repeat = "";

  if (options.hasOwnProperty("repeatTimes")) {
    for (let repeatMain = 0; repeatMain < options.repeatTimes; repeatMain++) {
      repeat += str;
      if (options.hasOwnProperty("addition")) {
        if (options.hasOwnProperty("additionRepeatTimes")) {
          if (options.hasOwnProperty("additionSeparator")) {
            for (
              let additionRepeat = 0;
              additionRepeat < options.additionRepeatTimes;
              additionRepeat++
            ) {
              if(additionRepeat !== options.additionRepeatTimes-1){
                repeat += options.addition + options.additionSeparator;
              }else{
                repeat += options.addition;
              }
            }
          } else {
            for (
              let additionRepeat = 0;
              additionRepeat < options.additionRepeatTimes;
              additionRepeat++
            ) {
              if(additionRepeat !== options.additionRepeatTimes-1 ){
                repeat += options.addition + "|";
              }else{
                repeat += options.addition;
              }
            }
          }
        } else {
          repeat += options.addition;
        }
      }

      if (
        options.hasOwnProperty("separator") &&
        repeatMain !== options.repeatTimes - 1
      ) {
        repeat += options.separator;
      } else if (repeatMain !== options.repeatTimes - 1) {
        repeat += "+";
      }
    }
  } else {
    repeat += str;

    if (options.hasOwnProperty("addition")) {
      if (options.hasOwnProperty("additionRepeatTimes")) {
        if (options.hasOwnProperty("additionSeparator")) {
          for (
            let additionRepeat = 0;
            additionRepeat < options.additionRepeatTimes;
            additionRepeat++
          ) {
            repeat += options.addition + options.additionSeparator;
          }
        } else {
          for (
            let additionRepeat = 0;
            additionRepeat < options.additionRepeatTimes;
            additionRepeat++
          ) {
            repeat += options.addition + "+";
          }
        }
      } else {
        repeat += options.addition;
      }
    }
  }

  return repeat;
}

module.exports = {
  repeater,
};
