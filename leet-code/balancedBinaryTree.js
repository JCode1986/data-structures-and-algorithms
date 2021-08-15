'use strict';

//Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

//Examples:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Input: root = []
// Output: true

var isBalanced = function(root) {
    if(!root) return true;
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    if(Math.abs(right - left) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
    
    function getHeight(node) {
        if(!node) return 0;
        let left = getHeight(node.left);
        let right = getHeight(node.right);
        return Math.max(left, right) + 1;
    }
};