'use strict';

//Given the root of a binary tree, return the inorder traversal of its nodes' values.

var inorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    let traverse = (node) => {
        if(node.left) traverse(node.left);
        res.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return res;
};