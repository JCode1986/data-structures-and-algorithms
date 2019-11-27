'use strict';

/* Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist. */

let arr = [1, 2, 3, 4, 5, 6, 7];
let key = 8;

function BinarySearch(arr, key) {
  for(let i = 0; i < arr.length; i++) {
    if(key === arr[i]) {
      return i;
    } 
  }
  return -1
}

console.log(BinarySearch(arr,key))