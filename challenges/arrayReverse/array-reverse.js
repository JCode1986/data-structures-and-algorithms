'use strict';

/* Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order. */

let arr = [10, 22, 33, 44, 56];

function reverseArray(arr) {
  let result = [];
  for(let i = arr.length-1; i >= 0; --i) {
    result.push(arr[i]);
  }
  return result;
};

console.log(reverseArray(arr));

