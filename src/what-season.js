module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (Object.prototype.toString.call(date) != '[object Date]') throw Error

  let month = (date.getMonth() + 1).toString()
  let season = '';
  switch (month) {
    case '12':
    case '1':
    case '2':
      season = 'winter';
      break;
    case '3':
    case '4':
    case '5':
      season = 'spring';
      break;
    case '6':
    case '7':
    case '8':
      season = 'summer';
      break;
    case '9':
    case '10':
    case '11':
      season = 'fall';
      break;
  }

  return season
};