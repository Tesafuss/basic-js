const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

//   if (date === null || date === undefined) {
//     return "Unable to determine the time of year!";
//   }
//   if(date !== "object") new Error('Invalid date!');

//   let month = date.getMonth();
//   let year = date.getFullYear();

//   if(year < 1970){
//     if (month < 2 || month === 11) {
//       return "winter";
//     }
//     if (month < 5 && month >= 2) {
//       return "spring";
//     }
//     if (month < 8 && month >= 5) {
//       return "summer";
//     }
//     if (month < 11 && month >= 5) {
//       return "autumn|fall";
//     }
//   }else{
//     if (month < 2 || month === 11) {
//       return "winter";
//     }
//     if (month < 5 && month >= 2) {
//       return "spring";
//     }
//     if (month < 8 && month >= 5) {
//       return "summer";
//     }
//     if (month < 11 && month >= 5) {
//       return "autumn";
//     }
//   }

}

module.exports = {
  getSeason,
};
