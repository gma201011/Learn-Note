### Object.defineProperty 與 Proxy 差別

* 使用 `Object.defineProperty` 會直接定義新的屬性，並且可以控制屬性是否可操作：

```js
// Case 1

const person = {
  name: "Tony",
  age: 28
};

Object.defineProperty(person, "age", {
  get() {
    console.log("getter")
    return this._age;
  },
  set(value) {
    this._age = value;
  },
  writable: false
});

console.log(person.age) // undefined
person.age = 30;
console.log(person.age) // trigger log "getter" and get 30
```

> 注意，這個 case 在調用 `Object.defineProperty` 時，並沒有第一時間就直接給予 `person.age` 的值，所以第一次取用會是 `undefined`

```js
// Case 2

const person = {
  name: "Tony",
  age: 28
};

Object.defineProperty(person, "age", {
  value: 99,
  writable: false,
  configurable: false
});

console.log(person.age); // 99
person.age = 88;
console.log(person.age); // 99

Object.defineProperty(person, "age", { value: 100 }); // TypeError: Cannot redefine property: age
```



* 使用 `proxy` 的話可以取代一些原有 Object 的行為，攔截 Object 所有的操作：

```js
const person = {
  name: "Tony",
  age: 20
};

const handler = {
  get(target, attribute) {
    return target[attribute];
  },
  set(target, attribute, value) {
    target[attribute] = value + 10;
    return true;
  }
}

const proxyObj = new Proxy(person, handler);
console.log(proxyObj.age); // 20
proxyObj.age = 30;
console.log(proxyObj.age) // 40
```





