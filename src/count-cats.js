module.exports = function countCats(matrix) {
  let flatten = [].concat.apply([], matrix).join(',');
  return ((flatten || '').match(/(?<! )\^\^(?! )/gm) || []).length
};