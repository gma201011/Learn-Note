// Object 指向另一個隱藏的連結物件，該物件即為 prototype(原型)
// 而原型物件也有自己的原型，會形成一個「原型練」


/*------------------------------------------------------------------------------------*/


// prototype 是構造函數的屬性、__proto__ 是物件的屬性，指向內部原型

function Person(name) {
  this.name = name;
}
Person.prototype.say = function() {
  console.log("Hi");
}

const tony = new Person("Tony");

console.log(Person.prototype === tony.__proto__); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__) // null

/*------------------------------------------------------------------------------------*/

// Object.create 方法：指定其原型物件與屬性，創建一個新物件
const peoplePrototype = {
  speak: function() {
    console.log(`${this.name} say hi.`);
  }
};

// 創建一個具有 peoplePrototype 方法的空物件
const tom = Object.create(peoplePrototype);

tom.name = "Tom"; // { name: "Tom" }
tom.speak(); // Tom say hi

console.log(Object.getPrototypeOf(tom) === peoplePrototype); // true


/*------------------------------------------------------------------------------------*/

// 原型鏈的查找，使用 Object.create 讓一個子類繼承父類

function People(gender) {
  this.gender = gender;
}

People.prototype.getGender = function() {
  return this.gender;
}

function Male(gender, age) {
  People.call(this, gender);
  this.age = age;
}

// 子類 extends 父類

Male.prototype = Object.create(People.prototype);
// 注意，如果就這麼寫的話：Male.prototype = People.prototype
// 會讓 Male 以及 People new 出來的實例，共用同一個原型

Male.prototype.constructor = Male;

Male.prototype.getAge = function() {
  return this.age;
}

const tim = new Male("male", 20);

tim.getAge(); // 20
tim.getGender(); // male




