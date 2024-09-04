/**
 * @param {string} str
 * @return {boolean}
 */
var validPalindrome = function(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
    }
    l++;
    r--;
  }

  return true;

  function isPalindrome(l, r) {
    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }
};

const s1 = validPalindrome("aba") // true
const s2 = validPalindrome("abca") // true
const s3 = validPalindrome("abc") // false

console.table([s1, s2, s3]);

