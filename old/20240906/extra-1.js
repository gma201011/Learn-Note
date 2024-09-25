// Please Clone this before start!!
/* a, b, c 是三個 request 的 callback function，
 ** 分別會延遲 500, 200 300 毫秒回來
 ** 執行 doByOrder 之後會後依序印出 b, c, a
 ** 希望能改成印出 a, b, c
 **
 */

// DONT' change a, b, c function
const a = (callback) => {
  setTimeout(() => {
    callback("a");
  }, 500);
};

const b = (callback) => {
  setTimeout(() => {
    callback("b");
  }, 200);
};

const c = (callback) => {
  setTimeout(() => {
    callback("c");
  }, 300);
};

const tasks = [a, b, c];

const doByOrder = (tasks, callback) => {
  if (!tasks.length) return;
  const nextFunc = tasks.shift();
  nextFunc((...args) => {
    callback(...args);
    return doByOrder(tasks, callback);
  });
};

doByOrder(tasks, console.log.bind(console));
