// 所謂的 currying，是把接受多個參數的函數，轉換成接收單一參數的函數，並且返回接受剩餘參數並返回結果的新函數

function sum(a, b, c) {
  return a + b + c;
}

// EX: sum(a, b, c) -> sum(a)(b)(c)


// Bad Example（違反開閉原則：對拓展開放，對修改封閉）

function sum1(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  }
}


// 利用高階函數達成科里化

function handleCurrying(func) {
  return (a) => {
    return (b) => {
      return (c) => {
        return func(a, b, c);
      }
    }
  }
}

const sum2 = handleCurrying(sum);