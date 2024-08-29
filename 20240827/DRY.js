function arrAdd1(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1);
  }
  return newArr;
}

function arrMult3(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 3);
  }
  return newArr;
}

function arrDivide2(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] / 2);
  }
  return newArr;
}

/*  秉著 DRY (Don't repeat yourself)原則，改造以上函數  */

function arrCompute(arr, operation) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(operation(arr[i]));
  }
  return newArr;
}

function arrAdd1(num) {
  return num + 1;
}

function arrMult3(num) {
  return num * 3;
}

function arrDivide2(num) {
  return num / 2;
}


/*  arrCompute 是一個 HOF(High Order Function)  */
/*  撰寫原則為「將變與不變分離」  */
/*  提高可讀性及可複用性 */
