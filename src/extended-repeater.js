const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let result = '';
  let resultAdditional = '';

  if (String(addition) !== '') {
    resultAdditional = repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
  }

  if (repeatTimes > 0) {
    result = str + resultAdditional;
    repeatTimes--;
  }

  while (repeatTimes > 0) {
    result += (separator + str + resultAdditional);
    repeatTimes--;
  }
  return result;
}
