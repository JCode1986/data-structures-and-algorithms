'use strict';

function insertionSort(arr) {
  if(!arr.length) return 'there is nothing in the array'
  for(let i = 1; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') return 'please enter a number'
    let temp = arr[i]
    let j = i - 1;
    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = insertionSort; 
