const add4 = (num) => num + 4;
const multiply3 = (num) => num * 3;
const divide2 = (num) => num / 2;

// 用 reduce 寫出一個多個函數串行執行的工作流 pipe & compose

const pipe = (...funcs) => {
  const callback = (input, func) => {
    return func(input);
  };
  return (param) => funcs.reduce(callback, param);
};

const compute = pipe(add4, multiply3, divide2);
compute(10); // 21

// 如果想要一個倒序的工作流，可以使用 reduceRight()

// 順序：pipe / 倒序：compose
