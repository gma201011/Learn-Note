# MPA 與 SPA 的比較


## 定義

* SPA，Single Page Application，不刷新頁面，路由跳轉是基於特定實現（EX: react-router），而非原生 HTML 文檔的跳轉

* MPA，Multiple Page Application，跳轉是由原生瀏覽器檔案控制，跳轉會刷新頁面


## MPA 優缺點

* 優點
  * 頁面獨立，SEO 友好
  * 只有單一頁面需要 handle，初始加載速度通常比 SPA 快
  * Server 端有更多的彈性處理應用（相對來說要處理的部分可能也較多）

* 缺點
  * 每次換頁都要刷新整個頁面，可能影響使用者體驗
  * 資源可能會被重複載入，每個頁面上有些相同需要用到的資源（CSS、JS）沒辦法直接復用
  * 優點即是缺點：與 Server 端通常會有更多的耦合，維護難度會增加

## 如何選擇技術方案

* 複雜的交互應用（文檔編輯器、Social Media）SPA 可能更適合
* 重視用戶體驗，尤其在行動端希望有接近 App 的體驗，會有更複雜的用戶端交互，SPA 會更適合
* SEO 是關鍵的話，可以考慮 MPA 或是 SSR 實踐的 SPA
  
