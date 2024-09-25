// With class static method

class SingleMan1 {
  speak() {
    console.log("Say Hi");
  }
  static getInstance() {
    if (!SingleMan1.instance) {
      SingleMan1.instance = new SingleMan1();
    }
    return SingleMan1.instance;
  }
}

const s1 = SingleMan1.getInstance();
const s2 = SingleMan1.getInstance();
console.log(s1 === s2); // true

// With closure
// Use another constructor SingleMan2Internal for method, and throw error if new a SingleMan2 directly

function SingleMan2Internal() {
  this.speak = () => console.log("Say Hi");
}

function SingleMan2() {
  throw new Error("Can not be new!");
}

SingleMan2.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new SingleMan2Internal();
    }
    return instance;
  }
})();

const t1 = SingleMan2.getInstance();
const t2 = SingleMan2.getInstance();
console.log(t1 === t2); // true

