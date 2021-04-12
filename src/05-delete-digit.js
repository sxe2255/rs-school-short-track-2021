/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  let arr = [];
  arr = n.toString().split('');
  arr.forEach((el, ind) => {
    arr[ind] = parseInt(el, 10);
  });
  const min = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(min), 1);
  res = parseInt(arr.join(''), 10);
  return res;
}

module.exports = deleteDigit;
