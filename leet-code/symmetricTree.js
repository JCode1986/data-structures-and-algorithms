'use strict';

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Examples:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Input: root = [1,2,2,null,3,null,3]
// Output: false

var isSymmetric = function(root) {
    //create 2 trees for comparison
    let leftSide = root.left
    let rightSide = root.right
    //check both trees recursively
    return checkTree(leftSide, rightSide)
};

function checkTree(q , p){
    //if both are at null, all nodes have been checked
    if(p === q) return true
    
    //if only 1 has reached null first, branch structure is not the same
    if(p === null || q === null) return false
    
    //if values are not equal, trees are not equal
    if(p.val !== q.val) return false
    
    //since symmetric, check opposing nodes on tree. 
    //if checking p left, you check q right along with it
    let nodeLeft = checkTree(p.left, q.right)
    let nodeRight = checkTree(p.right, q.left)
    
    // checks whether both sides of each respective tree match 
    return nodeRight && nodeLeft ? true : false
};