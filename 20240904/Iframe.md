## iframe 的使用場景

* 嵌入外部內容：Youtube player、Google Map 等
* 分離元件：將不同部分網頁分開進行模塊化開發
* 安全沙盒：將內容隔離在一個 sandbox 裡面，提高安全性
* 跨域溝通：在不同源的頁面進行數據交換（postmessage）



## 優點

* 分離內容：允許將不同來源的內容嵌套在一起，有助於內容分離
* 實現跨域通信：可使用 `postmessage` 等在父子頁面之間傳遞數據

```html
<!-- parent -->
<body>
  <iframe id="iframe" src="http://localhost:8000/" frameborder="0"></iframe>
  <script>
    const iframe = document.querySelector("#iframe");
    iframe.onload = () => {
      iframe.contentWindow.postMessage("msg", "http://localhost:8000");
    };
  </script>
</body>
```

```html
<!-- child -->
<body>
  <script>
    window.addEventListener("message", (e) => {        
      if (e.data === "msg" && e.origin === "http://localhost:9000") {
        console.log("trigger!");
      }
    });
  </script>
</body>
```



* 安全性：將不受信任的內容隔離在獨立環境中，可以避免主頁面被攻擊，進而提升安全性
* 無需刷新：允許在不刷新整個頁面的狀況載入新內容，對於動態載入的 app 很實用



## 缺點

* 性能問題：每個 iframe 都會載入一個新頁面，多個 iframe 可能會導致性能問題
* 可訪問性問題：螢幕閱讀器可能不會正確處理嵌套的 iframe 頁面，確保使用可以替代文本的 `alt` 及 `aria-label` 提高可訪問性
* 不利 SEO：搜索引擎不會解析在 iframe 中的內容
* 兼容性問題：有些瀏覽器不會正確支持 iframe





## 補充 Accessibility 可訪問性

**可訪問性核心是確保所有人，都能平等獲取和使用資訊及功能：**

1. 視覺障礙：
   * 盲人：依賴螢幕閱讀器瀏覽網頁
   * 低視力者：需要放大文本或高對比度（色弱）的設計，避免僅使用顏色傳達信息，以及不要限制螢幕的縮放功能
2. 聽覺障礙：需要字幕或手語理解音訊或影片內容
3. 運動障礙：需要鍵盤導航，無法使用滑鼠
4. 認知障礙：易於理解的網頁內容

**具體措施：**

1. 正確使用 HTML 語意標籤（`<h1> <h2>`），螢幕閱讀器可以正確解讀頁面不同部分
2. 對於圖片、圖表等非文本內容，應提供文字替代描述（`alt`）
3. 所有互動元素要可以透過鍵盤操作（不過現在行動裝置沒這個問題）
4. 使用足夠的顏色對比，讓色弱人士易於分辨內容