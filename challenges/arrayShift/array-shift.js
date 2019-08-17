'use strict';

let array = [2, 4, 6, 8];
let val = 5;

function insertShiftArray(arr) {
  
  let left_half_array = arr.splice(0, Math.ceil(arr.length / 2)); 
  
  left_half_array.push(val);
    
  let combine_arrays = (left_half_array.concat(arr))
    
  return combine_arrays;
  
  } 
  
  console.log(insertShiftArray(array))