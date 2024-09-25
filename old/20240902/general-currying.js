// 通用柯里化函數

// 1. 獲取函數參數的數量
// 2. 自動分層嵌套函數
// 3. 在最後一層調用 callback，傳入所有函數

const sum = (a, b, c, d) => a + b + c + d;

const handleCurrying = (func) => {
  const arity = func.length;
  const generateCurried = (prevArgs) => {
    return (nextArg) => {
      const args = [...prevArgs, nextArg];
      if (args.length >= arity) {
        return func(...args);
      } else {
        return generateCurried(args);
      }
    }
  }

  return generateCurried([]);
}


const curriedSum = handleCurrying(sum);
curriedSum(1)(2)(3)(4) // 10


// 回顧：pipe 函數用來組合多個 function，卻沒辦法支援多個參數的 function

const add1 = (a) => a + 1;
const add3 = (a) => a + 3;

const pipe = (...funcs) => {
  const funcExecute = (inputValue, func) => {
    return func(inputValue);
  }
  return (input) => {
    return funcs.reduce(funcExecute, input)
  }
}

const compute1 = pipe(add1, add3);
compute1(10); // 14


// 通用柯里化函數，解決 pipe 組合函數多個元數的問題：將多個參數的函數，變成可以傳入多次的一元參數

const add = (a, b) => a + b;
const multiply = (a, b, c) => a * b * c;
const addMore = (a, b, c, d) => a + b + c + d;

const curriedAdd = handleCurrying(add);
const curriedMultiply = handleCurrying(multiply)
const curriedAddMore = handleCurrying(addMore);

const compute2 = pipe(curriedAdd(1), curriedMultiply(2)(3), curriedAddMore(3)(4)(5));
compute2(10); // 78