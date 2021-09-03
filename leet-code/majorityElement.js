'use strict';

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Examples: 

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let majorityEl = nums[0]; 
    let count = 1; // taking the first el and it's count
    for(let i = 1; i < nums.length; i++){
        if(majorityEl !== nums[i]){
        // if we dont get the same el, decrement the el
            count--;
            // if count is 0 which means that el is no longer occuring max times so replace that spot with current el and initialize its count as 1
            if(count === 0){
                majorityEl = nums[i];
                count = 1
            }
        } else { 
        // if we get the same el increment the count
            count++
        }
    }
    return majorityEl
};

