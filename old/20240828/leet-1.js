/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} only exist one answer
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], i);
    } else {
      return [map.get(target - nums[i]), i];
    }
  }
};

const s1 = twoSum([2, 7, 11, 15], 9); // [0,1]
const s2 = twoSum([3, 2, 4], 6); // [1,2]
const s3 = twoSum([3, 3], 6); // [0,1]
