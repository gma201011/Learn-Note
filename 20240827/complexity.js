// Time Complexity

// O(1)
const ex1 = (n) => {
  const arr = [1, 2, 3];
  return arr[n];
}

// 0(logn)
const ex2 = () => {
  const arr = [1, 2, 3, 4, 5];
  const temp = [];
  for (let i = 0; i < arr.length; i = i * 2) {
    temp[i] = arr[i];
  }
  return temp;
}

// O(n)
const ex3 = () => {
  const arr = [1, 2, 3, 4, 5];
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i];
  }
  return temp;
}

// O(nlogn)
// [2, 5, 1, 7, 8, 3, 10];

const ex4 = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...ex4(left), pivot, ...ex4(right)];
}

// O(n^2)
const ex5 = (n) => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 3, 4, 5, 6];
  const temp = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let s = 0; i < arr2.length; s++) {
      const sum = arr1[i] + arr2[s];
      if (sum > n) temp.push(sum);
    }
  }
  return temp;
}

// O(2^n)
const ex6 = (n) => {
  if (n <= 1) {
    return 1;
  }
  return ex6(n - 1) + ex6(n - 2);
}


// Space Complexity

// O(1)

const s1 = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    console.log(arr[i]);
  }
}

// O(n)
const s2 = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
  return arr;
}

// O(n^2)
const s3 = (n) => {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let s = 0; s < n; s++) {
      matrix[i][s] = s;
    }
  }
  return matrix;
}
