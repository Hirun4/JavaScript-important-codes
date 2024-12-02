// Given an array of numbers, write a function that returns the second-largest number.

// Input: [1, 5, 3, 9, 7]
// Output: 7

function secondLargest(arr) {
    let sorted = arr.sort((a, b) => b - a);
    return sorted[1];
  }
  
  console.log(secondLargest([1, 5, 3, 9, 7])); // 7