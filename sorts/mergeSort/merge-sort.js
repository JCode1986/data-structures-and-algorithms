'use strict';

function mergeSort(arr) {
  let n = arr.length;
  if(typeof arr !== 'object') return `needs to be an array with integers`;
  //base case
  if(n === 0 || n === 1) return arr;

  //else chop array in half, until there is an individual element in array
  let mid = Math.floor(n/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  return arr;
};

function merge(left, right, arr) {
  //left
  let i = 0;
  //right
  let j = 0;
  //arr
  let k = 0;

  //sort left and right
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  
  if(i == left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    while(i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
};

module.exports = mergeSort; 
