'use strict';

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Examples:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

var isSameTree = function(p, q) {
    return traverse(p,q)
    
    function traverse(p, q){
        if(!p && !q) return true
        if(!p || !q) return false
        return p.val === q.val && traverse(p.left, q.left) && traverse(p.right, q.right)
    }
    
};