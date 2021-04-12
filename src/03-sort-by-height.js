/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const origin = arr.slice();
  let arrSort = [];
  const res = [];
  let pos = 0;
  arrSort = arr.sort((a, b) => a - b);
  for (let x = 0; x < arr.length; x++) {
    if (arrSort[x] === -1) {
      arrSort.splice(x, 1);
      x--;
    }
  }
  origin.forEach((el) => {
    if (el === -1) {
      res.push(-1);
    } else {
      res.push(arrSort[pos]);
      pos++;
    }
  });
  return res;
}

module.exports = sortByHeight;
