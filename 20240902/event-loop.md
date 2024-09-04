```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
        console.log(p);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });
first().then((arg) => {
  console.log(arg);
});

```

**流程拆解：**

1. 直接看 `first()` 的執行，`new promise` 構造函數會立即執行內部的 function，因此直接印出 **3**

2. `let p = new Promise...` 同上，再印出 **7**

> setTimeout 先把 callback 放進宏隊列

> p 這個 promise resolve(1)

> first return 的這個 promise resolve(2)

3. p 已經是 resolve 狀態，所以直接執行 then 裡面的 function，印出 resolve 的結果 **1**
4. `first()` 執行完，promise resolve 了，最後印出 **2**
5. 處理 setTimout，**5** 先印出來
6. 這時候 `resolve(6)` 是 resolve p，但是 p 已經 resolve 了，所以不管它
7. 最後印出 **Promise {1}** 的 p（**注意，就算 resolve 了，p 仍然是一個 promise，而不是一個值，要取得 resolve 的結果要用 `promise.resolve().then(res => res)`**）
