// immer.js 可以做為是一個不可變數據的方案

// 基本用法
const { produce } = require("immer");

const baseData = [
  {
    name: "staff-1",
    age: 99
  },
  {
    name: "staff-2",
    age: 88
  }
];

const recipe = draft => {
  draft.push({name: "staff3", age: 101});
  draft[1].age = 66;
}

const nextState = produce(baseData, recipe);

console.log(nextState);
// [
//   { name: 'staff-1', age: 99 },
//   { name: 'staff-2', age: 66 },
//   { name: 'staff3', age: 101 }
// ]
