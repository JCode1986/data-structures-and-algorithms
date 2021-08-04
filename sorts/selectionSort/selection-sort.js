'use strict';

let array = [8, 7, 6, 5, 4, 3, 2, 1];

function selectionSort(arr) {
    let temp;
    let min;
    for(let i = 0; i < arr.length; i++) {
        min = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if(min > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }
    }
    return arr;
}