## 何為 Functor

在 Functional Programming 裡面，Functor 指的是可以實現 map 函數的數據結構。

舉兩種 Functor 例子：

1. Identity Functor

```js
const Identity = (x) => ({
  map: f => Identity(f(x)),
  valueOf: () => x
})

const add1 = a => a + 1;
const add2 = a => a + 2;

const box = Identity(10);
box.map(add1).map(add2).valueOf(); // 13
```

2. Maybe Functor

```js
const isEmpty = (x) => x === undefined || x === null;

const Maybe = (x) => ({
  map: f => isEmpty(x) ? Maybe(null) : Maybe(f(x)),
  valueOf: () => x
})

const add1 = a => undefined;
const add2 = a + 2;
const toString = a => a.toString();


const maybeFunctor = Maybe(20);
maybeFunctor.map(add1).map(toString).map(add2).valueOf(); // null
```



Functor 一般會滿足兩個條件：

1. 恆等性（Identity）：調用 map，傳入恆等 function 以後，結果會跟原始的值一致

```js
const Identity = (x) => ({
  map: f => Identity(f(x)),
  valueOf: () => x
});

const box = Identity(10);
box.map(x => x).valueOf(); // 10
```

這確保了：

* Functor 必須有 map，並且 map 有創建新 Functor 的能力

* map 必須作為 function 的連接，而不是編輯或改變數據本身



2. 可組合性（Composition）

> 滿足 `Functor.map(f(g(x))) === Functor.map(f).map(g)`

```js
const Identity = (x) => ({
  map: f => Identity(f(x)),
  valueOf: () => x
});

const add1 = a => a + 1;
const add2 = a => a + 2;

const box = Identity(10);

const r1 = box.map(x => add1(add2(x))).valueOf(); // 13
const r2 = box.map(add1).map(add2).valueOf(); // 13
```



## 總結

Functor 的作用，在於實現函數組合的同時，確保副作用的可控