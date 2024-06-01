function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}
console.log(factorialize(1));  // "1"
console.log(factorialize(2));  // "2"
console.log(factorialize(3));  // "6"
console.log(factorialize(4));  // "24"
console.log(factorialize(5));  // "120"
console.log(factorialize(6));  // "720"
console.log(factorialize(7));  // "5040"
console.log(factorialize(8));  // "40320"
console.log(factorialize(9));  // "362880"
console.log(factorialize(10)); // "3628800"