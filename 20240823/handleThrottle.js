const handleThrottle = (func, delay) => {
  let timerId;
  return function (...args) {
    console.log(timerId);

    if (timerId) return;
    timerId = setTimeout(() => {
      func(...args);
      timerId = null;
    }, delay);
  };
};

const manyEvents = (func, ...args) => {
  setInterval(
    () => {
      func(...args);
    },
    0,
    args
  );
};

const func = (arr) => console.log(arr);
const func2 = handleThrottle(func, 1000);

manyEvents(func2, 999);

