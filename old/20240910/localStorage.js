// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。

class Storage {
  static getInstance() {
    if (!this.instance) {
      this.instance = new Storage();
    }
    return this.instance;
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
}



// Closure 版本
function StorageBase() {};
StorageBase.prototype.setItem = function(key, value) {
  return localStorage.setItem(key, value);
}

StorageBase.prototype.getItem = function(key) {
  return localStorage.getItem(key);
}

const storage = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance;
  }
})();

const r1 = storage();
const r2 = storage();
r1.setItem("p1", 123);
console.log(r1 === r2); // true
const r = r2.getItem("p1"); // 123




