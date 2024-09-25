// 手寫 immer.js produce

function produce(base, recipe) {
  let copy;
  const baseHandler = {
    set(obj, key, value) {
      if (!copy) {
        copy = { ...base };
      }
      copy[key] = value;
      return true;
    },
  };
  const draft = new Proxy(base, baseHandler);
  recipe(draft);
  return Object.freeze(copy || base);
}

const obj = {
  a: 1,
  b: {
    name: "Tony",
  },
};

const changeA = (draft) => {
  draft.a = 2;
};

const doNothing = (draft) => {
  console.log("Draft: " + draft);
};

const changeAObj = produce(obj, changeA);
const doNothingObj = produce(obj, doNothing);

console.log(obj); // { a: 1, b: { name: 'Tony' } }
console.log(changeAObj); // { a: 2, b: { name: 'Tony' } }
console.log(doNothingObj); // { a: 1, b: { name: 'Tony' } }

console.log(obj === doNothingObj) // true
console.log(obj === changeAObj) // false
