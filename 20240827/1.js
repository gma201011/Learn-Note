#!/usr/bin/env node

const readline = require('readline');

// 创建接口来读取用户输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提问并处理用户输入
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // 可以继续提问更多问题
  rl.question('How old are you? ', (age) => {
    console.log(`You are ${age} years old.`);

    // 关闭 readline 接口
    rl.close();
  });
});

rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
