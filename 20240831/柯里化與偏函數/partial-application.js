// 將某些參數固定，產生另一個更小函數的過程

// EX: func(a, b, c, d)
// func(b, c, d)
// func(c, d)
// 結論： n 元變成 m (m < n) 元函數，就是偏函數


// 用高階函數

function multiply(a, b) {
  return a * b;
}

function wrapFunc(func, fixedValue) {
  function wrappedFunc(input) {
    const newFunc = func(input, fixedValue);
    return newFunc;
  }
  return wrappedFunc;
}

const multiply3 = wrapFunc(multiply, 3);

multiply3(2)
console.log(multiply3(2)) // 6
