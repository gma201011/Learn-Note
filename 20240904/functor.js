// Functional Programming 中，一般是指支持 map 函數的結構
// 根據 map 不同的行為，以下為不同 functor 的種類

// 1. Identity Functor

const Identity = (x) => ({
  map: f => Identity(f(x)),
  valueOf: () => x,
  inspect: () => `Identity ${func(x)}`
});

const add1 = (a) => a + 1;
const add2 = (a) => a + 2;
const identityFunctor = Identity(10);
identityFunctor.map(add1).map(add2).valueOf(); // 13

// 2. Maybe Functor

const isEmpty = (x) => x === undefined || x === null;
const Maybe = (x) => ({
  map: f => isEmpty(x) ? Maybe(null) : Maybe(f(x)),
  valueOf: () => x,
  inspect: () => `Maybe ${func(x)}`
})

const add5 = a => a + 5;
const add6 = () => undefined;
const toString = a => a.toString();
const maybeFunctor = Maybe(20);
maybeFunctor.map(add5).map(add6).map(toString).valueOf(); // null
// 入參是空的話，就只會返回一個空的 Maybe Functor
// 在這種狀況底下使用 Identity Functor 會報錯
// computeFunctor.map(add6).map(toString) // TypeError: Cannot read properties of undefined (reading 'toString')


/*------------------------------------------------------------------------------------------------------------------------*/

// 合法的 Functor 需要符合以下條件：
// 1. 恆等性（Identity）： 傳遞恆等函數到 Functor 的 map，map 創建出來的新 Functor 會跟原來的盒子等價
// 目的為：確保 map 方法具備創建新 Functor 的能力，並確保 map 本身作用僅為串連函數，而非編輯
const identityFunction = x => x;
const originArr = [1, 2, 3];
const identityArr = Identity(originArr).map(identityFunction); // 一樣輸出 [1, 2, 3]
// JS 中的 Array.map 也是一種 Functor，也符合恆等性:
originArr.map(x => x); // 一樣輸出 [1, 2, 3]


// 2. 可組合性（Composition）
// Functor.map(x => f(g(x))) === Functor.map(g).map(f)

const compositeFunctor = Identity(10);
const r1 = compositeFunctor.map(add1).map(add2).valueOf(); // 13
const r2 = compositeFunctor.map(x => add1(add2(x))).valueOf(); // 13


// 結論：Functor 在實現了函數組合的同時，確保了副作用的可控