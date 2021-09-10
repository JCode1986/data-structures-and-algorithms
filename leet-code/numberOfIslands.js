'use strict';
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


// Examples:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]

//dfs approach
var numIslands = function(grid) {
    if(!grid || !grid.length) return 0;
    
    let islands = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            //new island and not visited
            if(grid[i][j] == 1) {
                dfs(grid, i, j, rows, cols);
                islands += 1;  
            }
        }
    }
    
    function dfs(grid, i, j, r, c) {
        //check if out of bounds and if island was visited
        if(i < 0 || i >= r || j < 0 || j >= c || grid[i][j] != 1) return;
        
        //mark seen islands
        grid[i][j] = "visited";
        
        //check horizontally and vertically
        dfs(grid, i + 1, j, r, c);
        dfs(grid, i - 1, j, r, c);
        dfs(grid, i, j + 1, r, c);
        dfs(grid, i, j - 1, r, c);
    }
    
    return islands;
};

