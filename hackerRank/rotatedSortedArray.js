'use strict';

//Find minimum element in rotated sorted array

//You may assum no duplicate exists in the array

//Example 1: 
//Input: [3, 4, 5, 1, 2]
//Output: 1

//Example 1: 
//Input: [4, 5, 6, 7, 0, 1, 2]
//Output: 0

function getMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    let mid;
       
    //if left is lesser than right -> return left value
    //else move left to mid 
    while(l + 1 < r) {
        mid = Math.floor(l + (r - l) / 2);
        if(nums[l] < nums[r]) { 
            return nums[l];
        } else {
            l = mid;
        }
    }
    return nums[l] > nums[r] ? nums[r] : nums[l]
}