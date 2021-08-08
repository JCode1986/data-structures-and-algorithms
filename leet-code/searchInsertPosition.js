'use strict';

//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//Examples: 

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function(nums, target) {
    if(nums.length == 1 && target == nums[0]) return 0;
    
    //declare right, left, and mid
    let l = 0;
    let r = nums.length - 1;
    let mid;
    
    //binary search
    while(l + 1 < r) {
        mid = Math.floor(l + (r - l) / 2);
        if(nums[mid] == target) return mid;
        if(target > nums[mid]) {
            l = mid;
        } else {
            r = mid;
        };
    };

    //post processing
    if(target > nums[l] && target < nums[r]) {
        return l + 1;
    } else if(target < nums[l]){
        return l;
    } else {
        return r + 1;
    };
};