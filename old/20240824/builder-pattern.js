// 使用場景：用來構建一個複雜的 Object，將構建過程分成多個步驟

// Product：表示要構建的 Object
class Computer {
  constructor() {
    this.cpu = "";
    this.gpu = "";
  }
  describe() {
    return `Cpu is ${this.cpu}, gpu is ${this.gpu}`;
  }
}

// Builder: 用來構建方法
class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }
  setCpu(cpu) {
    this.computer.cpu = cpu;
    return this;
  }
  setGpu(gpu) {
    this.computer.gpu = gpu;
    return this;
  }
  build() {
    return this.computer;
  }
}

// Director: 負責使用 Builder 構建方法
class ComputerEngineer {
  constructorComputer(builder) {
    return builder.setCpu("Intel i9").setGpu("RTX 3000").build();
  }
}
const engineer = new ComputerEngineer();
const builderForHighEnd = new ComputerBuilder();
const highEndComputer = engineer.constructorComputer(builderForHighEnd);

const builderForMidEnd = new ComputerBuilder();
const midEndComputer = builderForMidEnd.setCpu("AMD Ryzen 7").setGpu("GTX 1050").build();

console.log(highEndComputer.describe()); // Cpu is Intel i9, gpu is RTX 3000
console.log(midEndComputer.describe()); // Cpu is AMD Ryzen 7, gpu is GTX 1050
