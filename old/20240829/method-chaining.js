const arr = [1, 2, 3, 4, 5];

const biggerThanTwo = (num) => num > 2;
const addOne = (num) => num + 1;
const getSum = (a, b) => a + b;

// Bad Example

const filteredArr = arr.filter(biggerThanTwo);
const addedOneArr = filteredArr.map(addOne);
const sum = addedOneArr.reduce(getSum, 0); // 15

// use chaining

const chainedSum = arr.filter(biggerThanTwo).map(addOne).reduce(getSum, 0); // 15

// 鏈式調用的好處：
// 1. 規避中間可能被竄改引用類型導致數據錯亂的風險
// 2. 無需無外定義其他變量承接計算結果，擁有簡潔的程式碼
// 3. 前提：必須是在 Array.prototype 上，且調用完也會 return Array
