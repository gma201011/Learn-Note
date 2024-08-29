## fetch 與 XMLHttpRequest 的差別

* API 設計

  * XMLHttpRequest 使用 callback 來處理 request 與 response

    ```
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "http://api/data", true); // true 表示非同步
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    
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

    * ```js
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

    > 補充一下使用 `xhr.onload` 與 `xhr.onreadystatechange` 的差異：
    >
    >  `onload` 只能在請求完成時觸發，通常只會用於有取得 response 的處理
    >
    > `onreadystatechange` 

    * 

  * fetch 用 catch、then 來處理請求與響應

* 跨域請求

  * XMLHttpRequest 需要在 Server 端額外配置，以前會使用 JSONP 的方式繞過同源政策
  * fetch API 支持跨域請求，可以在 CORS 配置

* 錯誤處理

  * XMLHttpRequest 需要用 status 與 readystate 屬性配合，接著再使用 callback 處理
  * fetch 直接使用 catch 處理

* 取消請求

  * XMLHttpRequest 不提供原生的取消請求，可以通過中斷請求模擬取消
  * fetch 可以使用 AbortController 來達成

* 取得請求進度

  * XMLHttpRequest 

