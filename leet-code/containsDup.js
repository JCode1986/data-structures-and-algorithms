'use strict';

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/*
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//add elements into set, and check if elements in the array are in the set
var containsDuplicate = function(nums) {
    let seen = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) {
            return true;
        } else {
            seen.add(nums[i])
        }
    }
    return false;
};

//one liner solution by comparing the sets length and array's length
var containsDuplicate = function(nums) {
    return !(new Set([...nums]).size == nums.length)
};
