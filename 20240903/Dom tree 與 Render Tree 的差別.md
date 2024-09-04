## Dom tree 與 Render Tree 的差別

Render 過程：

1. 解析 HTML：獲得 HTML File 後，解析檔案，將 HTML 分解成節點。
2. 構建 Dom Tree：解析過程中，瀏覽器構建 Document Object Model（DOM），是個樹狀結構，其中每個 HTML 元素都是樹的節點，也包含了元素的屬性及文本內容。
3. 樣式計算：瀏覽器在構建 DOM Tree 的同時，也會解析 CSS，並應用到 DOM Tree 中的每個節點上。這個過程會生成每個元素的計算後樣式（computed styles）。
4. 建構 Render Tree：在樣式計算完成後，瀏覽器會根據 DOM Tree 和計算後的樣式構建 Render Tree。Render Tree 是專門用於佈局和繪製的樹狀結構，只包含可見元素，且這些元素的樣式信息也被應用到這個樹上。
5. 布局（layout）：在 Render Tree 構建完成後，瀏覽器會進行佈局計算，也稱為重排（reflow）。這個過程會確定每個元素在頁面上的位置和大小。
6. 繪製（painting）：根據渲染樹與布局繪製每個元素。
7. 合成（compositing）：在某些情況下（特別是當有複雜的動畫或層級變化時），瀏覽器會將不同的層合成到一個最終的圖像，然後顯示在螢幕上。



兩者差別：

1. Dom Tree 僅表示文檔結構，包含 HTML 元素、屬性、文本內容，不包含樣式，僅包含文檔的邏輯結構
2. Render Tree 包含的是視覺渲染的部分，所以不會包含不可見的元素或透過 CSS 隱藏的元素；**Render Tree 基本上是 Dom Tree 與 CSS 的組合結果，用於頁面的 layout 與 painting**



## Reflow

Reflow 是指瀏覽器需要重新計算元素的佈局與位置的過程，以下會觸發 Reflow：

1. Margin、Border、Padding 發生改變時
2. 新增或移除 Dom 節點
3. 改變瀏覽器的窗口大小（手動拉動窗口、全屏模式、Inspector 檢視響應測試，JS 沒辦法直接改變當前窗口大小）

> 這會觸發 `resize` 事件

4. 顯示或隱藏元素，`display: none -> display: block`
5. 改變字體大小或樣式
6. 讀取 dom 結構的 `offsetWidth`、`offsetHeight`、`scrollWidth`、`scrollHeight`、`clientWidth`、`clientHeight`，瀏覽器可能會先進行一次 reflow 計算新的值

> offsetWidth 包含 padding、border 延伸出去的寬度
>
> scrollWidth 反應實際的高度，連同超出容器的高度也會被計算進去（即使用 `overflow: hidden` 也還是會被計算進去）
>
> clientWidth 包含 padding 的寬度

```html
  <style>
    .test {
      width: 200px;
      height: 200px;
      border: 100px solid red;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="test">
    這是一個非常高的內容，超出了元素的可視區域。<br>
    這是一個非常高的內容，超出了元素的可視區域。<br>
    這是一個非常高的內容，超出了元素的可視區域。<br>
    這是一個非常高的內容，超出了元素的可視區域。<br>
    這是一個非常高的內容，超出了元素的可視區域。<br>
  </div>

  <script>
    var element = document.querySelector(".test");
    console.log(element.offsetHeight) // 440px(height: 200 + padding: 20 * 2 + border: 100 * 2)
    console.log(element.clientHeight) // 240px(height: 200 + padding: 20 * 2)
    console.log(element.scrollHeight) // 245px(height: 200 + content 45)
  </script>
</body>
```

7. 元素文本內容發生變化，`textContent` 或是 `innerHTML`

8. 滾動頁面， `position: fixed or sticky` 的元素位置發生變化，可能也會導致 reflow



## 避免 reflow 頻繁觸發的技巧

* 一次性插入元素的最終結果，減少 dom 的操作次數：

```html
<body>
  <ul id="list"></ul>

  <script>
    const list = document.querySelector("#list");
    let items = "";

    for (let i = 1; i <= 10000; i++) {
      items += `<li>${i}</li>`;
    }
    list.innerHTML = items;
  </script>
</body>
```

* 使用 DocumentFragment

```html
<body>
  <ul id="list"></ul>

  <script>
    const list = document.querySelector("#list");
    const fragment = document.createDocumentFragment();     

    for (let i = 1; i <= 10000; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  </script>
</body>
```



