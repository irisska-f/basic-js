const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  let active = parseFloat(sampleActivity);
  if (isNaN(active) || active <= 0 || active > MODERN_ACTIVITY) return false;

  const temp = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / active) / temp);
};
