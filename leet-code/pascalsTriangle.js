'use strict';

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Examples:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Input: numRows = 1
// Output: [[1]]

var generate = function(numRows) {
    let dp = [[1], [1, 1]]
    if(numRows == 1) return dp[0];
    if(numRows == 2) return dp[1];
    
    let start = 1;
    
    while(numRows != 2) {
        let arr = [1];
        for(let i = 1; i < dp.length; i++) {
            arr.push(dp[i][start - 1] + dp[start][i])
        }
        arr.push(1);
        dp.push(arr);
        numRows--;
        start++;
    }
    return dp;
};