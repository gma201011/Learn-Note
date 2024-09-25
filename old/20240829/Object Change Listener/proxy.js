const person = {
  name: "tony",
  age: 28
}

const handler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {

    target[property] = "yoyoyo: " + value;
    return true;
  }
}

const proxyObj = new Proxy(person, handler);

console.log(proxyObj.name); // tony
proxyObj.name = "tony"
console.log(proxyObj.name) // yoyoyo: tony