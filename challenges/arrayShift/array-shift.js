'use strict';

let arr = [2, 4, 6, 8];
let val = 5;

function insertShiftArray(arr) {

  arr.push(val);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr; 
}

console.log(insertShiftArray(arr));