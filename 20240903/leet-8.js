/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const trimmedStr = s.trim();
  let resultNumber;
  const isValidDigit = (str) => str && Number.isInteger(parseInt(str));

  const digitArr = [];
  if (["+", "-"].includes(trimmedStr[0]) || isValidDigit(trimmedStr[0])) {
    digitArr.push(trimmedStr[0]);
  } else {
    return 0;
  }
  for (let i = 1; i < trimmedStr.length; i++) {
    if (isValidDigit(trimmedStr[i])) {
      digitArr.push(trimmedStr[i]);
    } else {
      break;
    }
  }
  resultNumber = parseInt(digitArr.join(""));

  if (isNaN(resultNumber)) return 0;

  const maxNumber = Math.pow(2, 31) - 1;
  const minNumber = -Math.pow(2, 31);

  if (resultNumber > maxNumber) return maxNumber;
  if (resultNumber < minNumber) return minNumber;
  return resultNumber;
};

const s1 = myAtoi("42");
const s2 = myAtoi("-42");
const s3 = myAtoi("4193 with words");
const s4 = myAtoi("words and 987");
const s5 = myAtoi("-91283472332");
const s6 = myAtoi("+-12");

console.table([s1, s2, s3, s4, s5, s6]);

