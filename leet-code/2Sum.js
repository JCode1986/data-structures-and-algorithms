'use strict';

//Return the indices of elements thats add up to target number
var twoSum = function(nums, target) {
    //create map object
    let seen = new Map();
    //loop through elements in array
    for(let i = 0; i < nums.length; i++) {
        //if element in map; return index -> (value) and current index
        if(seen.has(target - nums[i])) {
        return [seen.get(target - nums[i]), i]
        } else {
        //place element as key and index as value to map object
        seen.set(nums[i], i)
        }
    }
};

let arr = [2, 5, 7, 9];
let sum = 9;

console.log(twoSum(arr, sum))
