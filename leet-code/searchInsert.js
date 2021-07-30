'use strict';
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function(nums, target) {
    let len = nums.length;
    let start = 0;
    let end = len - 1;
    
    while (start <= end) {
        let middle = Math.floor((start+end)/2);
        if (nums[middle] === target) {
            return middle;
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        } 
    }
    
    return start;
};