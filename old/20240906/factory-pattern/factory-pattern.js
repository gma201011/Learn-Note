// // Before

class Coder {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.career = "coder";
    this.work = ["debug, coding"]
  }
}

class ProductManager {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.career = "PM";
    this.work = ["meeting", "scheduling"]
  }
}

class oldFactory {
  constructor(name, age, career) {
    switch(career) {
      case "coder":
        return new Coder(name, age);
      case "PM":
        return new ProductManager(name, age);
      // ...
    }
  }
}

const pm = new oldFactory("Tony", 20, "PM");
const rd = new oldFactory("Tim", 25, "coder");


// After: Optimize with factory mode

class User {
  constructor(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
  }
}

class Factory {
  constructor (name, age, career) {
    this.name = name;
    this.age = age;
    let work;
    switch(career) {
      case "coder":
        work = ["debug, coding"];
        break;
      case "PM":
        work = ["meeting", "scheduling"];
        break;
      case "Boss":
        work = ["management"];
        break;
    }
    return new User(name, age, career, work);
  }
}

const opCoder = new Factory("Tony", 99, "coder");
const opPM = new Factory("Tim", 88, "PM");

// 工廠模式：將創建 Object 的過程單獨封裝，故不會有 Coder、ProductManager、Boss 等 Class 再被創建