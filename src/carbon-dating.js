const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') return false

  const numberActivity = parseFloat(sampleActivity)
  if (!(numberActivity && numberActivity > 0 && numberActivity < MODERN_ACTIVITY)) return false;

  let N_N0 = MODERN_ACTIVITY / numberActivity;

  let k = 0.693 / HALF_LIFE_PERIOD

  let t = Math.log(N_N0) / k

  return Math.ceil(t)
};