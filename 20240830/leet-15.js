/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b); // [ -4, -2, -2, -2, -1, -1,  0,  1,  2, 2, 2, 2]
  const resultArr = [];
  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = sortedArr.length - 1;
    while (l < r) {
      const sum = sortedArr[i] + sortedArr[l] + sortedArr[r];
      if (sum > 0) {
        r--;
        while (sortedArr[r] === sortedArr[r + 1]) {
          r--;
        }
      } else if (sum < 0) {
        l++;
        while (sortedArr[l] === sortedArr[l - 1]) {
          l++;
        }
      } else {
        resultArr.push([sortedArr[i], sortedArr[l], sortedArr[r]]);
        r--;
        l++;
        while (l < r && sortedArr[r] === sortedArr[r + 1]) {
          r--;
        }
        while (l < r && sortedArr[l] === sortedArr[l - 1]) {
          l++;
        }
      }
    }
  }
  return resultArr;
};

// 可以用 Array.from(new Set(resultArr.map(JSON.stringify)).map(JSON.parse)) 來做 Array 的去重（很爛就是了呵呵）

threeSum([-4, -1, -1, 0, 1, 2]); // [[-1,-1,2],[-1,0,1]]
threeSum([0, 1, 1]); // []
threeSum([0, 0, 0]); // [[0,0,0]]
