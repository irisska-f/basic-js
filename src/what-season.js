const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!'

  let getClass = (data) => ({}.toString.call(data).slice(8, -1));

  if(getClass(date) !== 'Date') throw new Error();

  const month = date.getMonth();

  if(month < 2 || month >= 11) {
    return 'winter';
  }else if(month < 5) {
    return 'spring';
  }else if(month < 8) {
    return 'summer';
  }else if(month < 11) {
    return'autumn';
  }
};

