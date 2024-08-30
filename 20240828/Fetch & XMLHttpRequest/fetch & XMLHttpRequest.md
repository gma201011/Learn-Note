## fetch 與 XMLHttpRequest 的差別

* API 設計

  * XMLHttpRequest 使用 callback 來處理 request 與 response

    ```js
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:9000/data", true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Response is: " + xhr.responseText);
      } else {
        console.error("Error: " + xhr.responseText);
      }
    };
    xhr.onerror = function () {
      console.error("Network error or cross-origin request denied");
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("Response is: " + xhr.responseText);
        } else {
          console.error("Error: " + xhr.responseText);
        }
      }
    };
    xhr.send();
    
    ```
  
  * fetch 返回的是 promise，故也可搭配 async await
  
    ```js
    const handleDataRequest = async () => {
      try {
      const response = await fetch("http://127.0.0.1:9000/data");
      if (!response["ok"]) {
        throw new Error("Network failed.");
      }
      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json(); // 解析为 JSON
      } else {
        data = await response.text(); // 解析为文本格式
      }
      console.log("res data: ", data);
      } catch (err) {
        console.error(err);
      }
    }
    handleDataRequest();
    ```
  
    



* 語法差異

  * XMLHttpRequest 用 onload、onerror、unreadystatechange 處理 callback 的各個階段

    > 補充一下使用 `xhr.onload` 與 `xhr.onreadystatechange` 的差異：
    >
    >  `onload` 只能在請求完成時觸發，通常只會用於有取得 response 的處理，對應到的是 `onreadystatechange` 的階段 4
    >
    > `onreadystatechange` 可以處理 XMLHttpRequest 每個狀態的變化：
    >
    > 0：UNSENT
    >
    > 1：OPEN
    >
    > 2：HEADERS_RECEIVED
    >
    > 3：LOADING
    >
    > 4：DONE 

  * fetch 用 catch、then 來處理請求與響應

* 跨域請求

  * fetch API 可以在第二個參數加入 CORS 相關配置

  ```js
  const corsConfig = {
    mode: "cors", // cors(default), no-cors, same-origin
    credentials: "same-origin", // same-origin(default), omit, include
  };
  
  ```

  > mode 參數：
  >
  > 1. 預設使用 `cors`，如果是跨來源的簡單請求，則一定會發送，但必須配置 `Access-Control-Allow-Origin` 才會正確響應；如果不是簡單請求，就會先發一個預檢請求檢測是否正確配置 `Access-Control-Allow-Origin`
  > 2. `no-cors`  表示必須是簡單請求，所以限制只能使用 `GET`、`HEAD` 、`POST`  方法，請求的 headers 只能有 `Accept`、`Accept-Language`、`Content-Type`（但 `Content-Type` 僅限於 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain`） 等
  > 3. `same-origin` 則是完全禁止跨域請求
  >
  > credentials 參數：
  >
  > 1. 預設使用 `same-origin`，僅發送包含同源請求的憑證，跨域就不發
  > 2. `omit` 不發送任何憑證
  > 3. `include` 不管是否跨域都會發送憑證
  >
  > > 憑證包含 cookie、Authorization（如 `[Authorization: Bearer ...`）、TLS 客戶端證書等

* 錯誤處理

  * XMLHttpRequest 需要用 status 與 readystate 屬性配合，接著再使用 callback 處理
  * fetch 直接使用 catch 處理

* 取消請求

  * XMLHttpRequest 可以有 `abort()` 方法可以中斷請求：

  ```HTML
  <body>
    <button onclick="abortRequest()">Abort</button>
    <script>
      var xhr = new XMLHttpRequest();
  
      // 初始化一個 GET 請求
      xhr.open('GET', 'http://localhost:9000/data', true);
  
      // 監聽 readyState 變化的事件
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };
  
      // 發送請求
      xhr.send();
  
      function abortRequest() {
        xhr.abort();
      }
    </script>
  </body>
  ```

  * fetch 可以使用 AbortController 來達成

  ```html
  <body>
    <button onclick="abortRequest()">Abort</button>
    <script>
      const controller = new AbortController();
      const signal = controller.signal;
  
  
      fetch('http://localhost:9000/data', {signal}).then(res => {
        return res.text();
      }).then(data => {
        console.log(data);
      }).catch(err => {
        if (err.name === "AbortError") {
          console.log("Request has been cancel.")
        } else {
          console.error('Fetch request failed:', err);
        }
      })
  
      function abortRequest() {
        controller.abort();
      }
    </script>
  </body>
  ```

  > ` controller.abort()` 會拋一個錯誤出來，可以在調用 fetch 時用 catch 捕獲

* 取得請求進度

  * XMLHttpRequest：可以用 `xhr.onprogress = function(){...}`  的方法取得

