'use strict';

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Examples:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Input: root = [1,2,3], targetSum = 5
// Output: false

// Input: root = [1,2], targetSum = 0
// Output: false

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let flag = false;
    dfs(root);
    function dfs(node,sum = 0){
        sum += node.val;
        node.left && dfs(node.left, sum);
        if((!node.left && !node.right) && sum===targetSum) flag = true
        node.right && dfs(node.right, sum);
    }
    return flag;
};