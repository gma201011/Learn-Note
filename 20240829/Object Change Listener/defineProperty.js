const person = {
  name: "Tony",
  age: 28
}

// EX1: Define new attribute
Object.defineProperty(person, "subject", { // return new object value
  value: "math",
  writable: false
})

console.log(person.subject) // math
person.subject = "english";
console.log(person.subject) // still math, because writable: false

// EX2: Listen attribute change

Object.defineProperty(person, "age", { // return new object value
  get() {
    console.log("Get value.")
    return this._age;
  }, 
  set(value) {
    console.log("Set value.")
    this._age = "Yo";
  },
  configurable: false
})

person.age = 20; // trigger "Set value."
console.log(person.age) // "Yo"

delete person.age; // false
console.log(person.age) // "Yo"

Object.defineProperty(person, "age",{ get() {}}); // TypeError: Cannot redefine property: age
