> 先補獲，再冒泡

* 補獲
  * 從 dom tree 根節點，逐層觸發到目標元素
* 冒泡
  * 從目標元素，再到父元素，接著是更高層次的祖先元素
  * **冒泡是預設的事件傳播方式**

> addEventlistener 的第三個參數，true 為監聽捕獲，false 為監聽冒泡（預設 false）

```html
<body>
  <div id="parent">
    <div id="inner">
      <div id="child"></div>
    </div>
  </div>
  <script>
    const parent = document.querySelector("#parent");
    const inner = document.querySelector("#inner");
    const child = document.querySelector("#child");

    parent.addEventListener("click", (e) => {
      console.log("parent");
    });
    inner.addEventListener("click", (e) => {
      console.log("inner");
    }, true);
    child.addEventListener("click", (e) => {
      console.log("child");
      e.stopPropagation();
    });
  </script>
</body>
```

上述情況，點擊 child，會依序印出 inner、child：

1. 捕獲階段，依序為 parent、inner、child，而 inner 綁定的 addEventlistener 第三個參數為 true，所以會在捕獲階段觸發，故印出 inner
2. 捕獲到 child 以後，開始冒泡，接著印出 addEventlistener 默認為 false（冒泡）的 child
3. `e.stopPropagation()` 阻止了之後的冒泡行為，所以沒有再觸發任何監聽器