/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while ((m - 1) >= 0 && (n - 1) >= 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    } else {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    }
  }

  if (m <= 0) {
    while ((n - 1) >= 0) {
      nums1[n - 1] = nums2[n - 1];
      n--;
    }
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
// merge([1], 1, [], 0); // [1]
// merge([0], 0, [1], 1); // [1]
// merge([1,0], 1, [2], 1); // [1, 2]

var merge2 = function (nums1, m, nums2, n) {
  nums1
    .splice(0, m)
    .concat(nums2.splice(0, n))
    .sort((a, b) => a - b)
    .forEach((item, index) => (nums1[index] = item));
};

// const arr = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// merge2(arr, 6, [1, 2, 2], 3); // [1,2,2,3,5,6]
// console.log(arr);
