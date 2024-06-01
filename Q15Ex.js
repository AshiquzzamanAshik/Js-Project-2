function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5