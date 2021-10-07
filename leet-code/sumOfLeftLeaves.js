'use strict';

// Given the root of a binary tree, return the sum of all left leaves.

// Examples:

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

// Input: root = [1]
// Output: 0

var sumOfLeftLeaves = function(root) {
    if(!root || !root.left && !root.right) return 0;
    let sum = 0;
    
    let traverse = (node) => {
        if(!node) return;
        node.left && !node.left.left && !node.left.right ? sum += node.left.val : traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return sum;
};