## 什麼是 Immutable.js

immutable.js 提供了一系列的 API，幫助使用者確保數據的不可變性，使用持久化數據結構，避免拷貝帶來的各種問題：

```js
import { Map } from 'immutable';

const dataA = Map({
 	type: "staff",
  level: 20,
  salary: 4000,
  age: 30
});

const dataB = dataA.set({
  age: 40
})


-> dataB: {
   	type: "staff",
  	level: 20,
  	salary: 4000,
  	age: 40
	}
```

以上用法，如果在只想得到某種改變某 Object key 值之一時特別實用。



## Immutable.js 如何做到的？

> 字典樹 trie

```
dataA -> type   -> "staff"
			-> level  -> 20
			-> salary -> 4000
			-> age    -> 30
```

當我們創建 dataB 時，會只對發生變化的 age 創建新的數據，將 Object 其他指針指回去：

```
dataB -> type   -> "staff"
			-> level  -> 20
			-> salary -> 4000
			
			-> age    -> 40（新創建數據）
```



