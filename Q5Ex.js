function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  console.log(countVowels("Problem Solving")); // 4
  console.log(countVowels("Submit your assignment")); // 7