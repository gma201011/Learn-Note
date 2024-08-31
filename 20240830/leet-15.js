/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b); // [ -4, -1, -1, 0, 1, 2 ]

  let l = 0;
  const length = sortedArr.length;
  const resultArr = [];

  while (l < (length - 1)) {
    const target = -sortedArr[l];
    console.log(target)
    for (let i = l + 1; i < length; i++) {
      const map = new Map();
      if (!map.has(target - sortedArr[i])) {
        map.set(sortedArr[i], i);
      } else {
        console.log(11111)

        resultArr.push([-target, sortedArr[i], map.get(i)]);
      }
    }
    l++;
  }
  console.log(resultArr);
  return resultArr;
  
  function handleTwoSum(arr, target) {

  }
};

[ -4, -1, -1, 0, 1, 2 ]

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]
// threeSum([0, 1, 1]); // []
// threeSum([0, 0, 0]); // [[0,0,0]]
