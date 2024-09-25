function handleDeepClone(obj) {
  if (
    !["[object Object]", ["object Array"]].includes(
      Object.prototype.toString.call(obj)
    ) ||
    obj == undefined
  ) {
    return obj;
  }
  let instance;

  if (Array.isArray(obj)) {
    instance = [];
  } else {
    instance = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      instance[key] = handleDeepClone(obj[key]);
    }
  }
  return instance;
}

const a1 = {
  a: 20,
  b: {
    c: 30
  }
}

const r1 = handleDeepClone(a1)
console.log(r1 === a1);


