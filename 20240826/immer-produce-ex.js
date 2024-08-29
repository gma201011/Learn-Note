// immer.js 實現的拷貝並不是暴力遞迴，而是「逐層進行淺拷貝」的按需拷貝
// EX: 如果 Object 有三層嵌套，如果對於第二層做了修改，就只對第二層進行 proxy 攔截的拷貝
// 重點：只要寫操作沒執行，拷貝動作就不會發生


const baseObj = {
  a: 1,
  b: {
    name: "Tony",
    job: {
      a: "cleaning",
      b: "sale"
    }
  }
}

const changeB = (draft) => {
  draft.b.name = "Tom";
}

const changeBObj = produce(baseObj, changeB);

console.log(baseObj === changeBObj); // false
console.log(baseObj.b === changeBObj.b); // false
console.log(baseObj.b.job === changeBObj.b.job); // true

function produce(baseObj, recipe) {
  const cache = new Map();

  const handler = {
    get(target, key) {
      const value = target[key];
      if (typeof value === "object" && value !== null) {
        return new Proxy(value, handler);
      }
      return value;
    },
    set(target, key, value) {
      const copy = {...target};
      copy[key] = value;
      cache.set(target, copy);
    }
  }

  const finalize = (state) => {
    const result = cache.get(state) || {...state};
    Object.keys(state).forEach(key => {
      result[key] = cache.get(state[key] || result[key]);
    })
    return result;
  }

  const proxy = new Proxy(baseObj, handler);
  recipe(proxy);
  return finalize(baseObj);
}

