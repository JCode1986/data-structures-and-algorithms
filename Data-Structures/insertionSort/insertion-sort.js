'use strict';

function insertionSort(arr) {
  if(!arr.length) return 'please enter numbers in the array'
  for(let i = 1; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') return 'wooooo'
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

//PSEUDO
// InsertionSort(int[] arr)
  
//     FOR i = 1 to arr.length
    
//       int j <-- i - 1
//       int temp <-- arr[i]
      
//       WHILE j >= 0 AND temp < arr[j]
//         arr[j + 1] <-- arr[j]
//         j <-- j - 1
        
//       arr[j + 1] <-- temp
