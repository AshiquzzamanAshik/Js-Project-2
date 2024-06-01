function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5
console.log(findSmallestNum([2, 6, 7, 10]));   // 2
console.log(findSmallestNum([-2, -3, 0, 10])); // -3