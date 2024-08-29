// 手寫一個 map（僅原理，非源碼）

const map = (arr, callback) => {
  const length = arr.length;
  const newArr = [];

  for (let i = 0; i < length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const arr = [2, 3, 4];
const func = (num) => num + 1;

map(arr, func); // [3, 4, 5];

// 使用 reduce 模擬一個 map

const arr2 = [2, 3, 4];
const addOneAndPush = (prev = [], curr) => {
  prev.push(curr + 1);
  return prev;
}

arr2.reduce(addOneAndPush, []); // [3, 4, 5]

// map 可以視作是一個特殊的 reduce，map 鎖定 initial value 會是一個 []，且最後也只能返回一個 Array
// reduce() 有兩個特徵
// 1. 參數組合（也能傳函數）
// 2. 函數 pipeline
// 作為 functional programming 常用的函數，本質上是因為其映射函數組合的思想