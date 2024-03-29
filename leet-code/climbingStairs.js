'use strict';

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Examples:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

var climbStairs = function(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n];
};