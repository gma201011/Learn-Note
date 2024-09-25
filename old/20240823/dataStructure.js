// stack in JS
// get() 的可以替換成深拷貝

class Stack {
  constructor() {
    this.val = [];
  }
  add(item) {
    this.val.push(item);
  }
  delete() {
    this.val.pop();
  }
  get() {
    return [...this.val];
  }
}

const s1 = new Stack();
s1.add("a1");
s1.add("a2");
s1.add("a3");

const r1 = s1.get();

s1.delete();

const r2 = s1.get();

console.log(r1); // [ 'a1', 'a2', 'a3' ]
console.log(r2); // [ 'a1', 'a2' ]

class Queue {
  constructor() {
    this.val = [];
  }
  add(item) {
    this.val.push(item);
  }
  delete() {
    this.val.shift();
  }
  get() {
    return [...this.val];
  }
}

const queue = new Queue();
queue.add("q1");
queue.add("q2");
queue.add("q3");
const t1 = queue.get();

queue.delete();
const t2 = queue.get();

console.log(t1); // [ 'q1', 'q2', 'q3' ]
console.log(t2); // [ 'q2', 'q3' ]



