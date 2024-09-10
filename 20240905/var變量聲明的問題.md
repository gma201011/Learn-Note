## 使用 var 進行變量聲明可能會造成的問題



### 允許重複的變量聲明，導致數據被覆蓋

```js
var a = 1;

function print() {
  console.log(a);
}

var a = 2;

print(); // 2
```

### 變量提升導致怪異的數據訪問及閉包問題

```js
// Case1

if (Math.random() < 0.5) {
  var a = 20;
  console.log(a); // 20
} else {
  console.log(a); // undefined
}

console.log(a); // undefined or 20
```

Case1 展示 var 聲明得以重複宣告的問題，且變量的提升讓未被宣告的變數可以直接被調用。

```html
// Case2

<div class="buttons"></div>
<script>
  var buttons = document.querySelector(".buttons");
  for (var i = 0; i <= 10; i++) {
    var button = document.createElement("button");
    button.innerHTML = "按鈕" + i;
    button.addEventListener("click", () => {
      console.log(i);
    });
    buttons.appendChild(button);
  }
</script>
```

Case2 每個按鈕按下去都會印出 11，因為點擊按鈕時執行 callback，循環已經結束了，並且閉包特性讓 function 訪問了外部的變數，導致沒有如預期印出對應的數字。

以前解決問題的方式如下（IIFE）：

```js
(function (i) {
  button.addEventListener("click", () => console.log(i));
})(i);
```

利用 IIFE 製造一個分離的作用域。

### 全局變量的污染問題

使用 var 宣告，會讓變數掛到 window 之下：

```js
var a = 20;
console.log(window.a); // 20
```

並且一樣可以覆寫：

```js
var console = 20;
console.log(1); // Uncaught TypeError: console.log is not a function
```

