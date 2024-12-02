//Given an array of numbers, write a function that returns the largest number

// Input: [1, 5, 3, 9, 2]
// Output: 9

function findLargest(arr) {
    return Math.max(...arr);
  }
  
  console.log(findLargest([1, 5, 3, 9, 2])); // 9