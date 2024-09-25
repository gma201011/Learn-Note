// Open-Closed Principle (OCP) - 開放封閉原則
// 對擴展開放，對修改封閉


// Before：違反 OCP
// 未來改動僅能修改 Factory，最後可能導致 Factory 過於臃腫，難以維護

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

// After：Abstract Factory 抽象工廠模式

// 抽象產品
class User {
  constructor(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
  }
}

// 抽象工廠
class UserFactory {
  createUser(name, age) {
    throw new Error("This method should be overridden");
  }
}

class CoderFactory extends UserFactory{
  createUser(name, age) {
    return new User(name, age, "coder", ["debug", "coding"]);
  }
}

class PMFactory extends UserFactory {
  createUser(name, age) {
    return new User(name, age, "PM", ["meeting", "scheduling"]);
  }
}

class BossFactory extends UserFactory {
  createUser(name, age) {
    return new User(name, age, "Boss", ["management"]);
  }
}

function createUser(factory, name, age) {
  return factory.createUser(name ,age);
}

const coderFactory = new CoderFactory();
const pmFactory = new PMFactory();
const bossFactory = new BossFactory();

const coder1 = createUser(coderFactory, "Tony", 99);
const pm1 = createUser(pmFactory, "Tim", 88);
const boss1 = createUser(bossFactory, "Han", 77);

