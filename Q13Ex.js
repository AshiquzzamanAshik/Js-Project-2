function getLastElement(arr) {
    return arr[arr.length - 1];
  }

console.log(getLastElement([1, 2, 0]));  // "0"
console.log(getLastElement([1, 2, 1]));  // "1"
console.log(getLastElement([1, 2, 2]));  // "2"
console.log(getLastElement([1, 2, 3]));  // "3"
console.log(getLastElement([1, 2, 4]));  // "4"
console.log(getLastElement([1, 2, 5]));  // "5"
console.log(getLastElement(["a", "b", "a"])); // "a"
console.log(getLastElement(["a", "b", "b"])); // "b"
console.log(getLastElement(["a", "b", "c"])); // "c"