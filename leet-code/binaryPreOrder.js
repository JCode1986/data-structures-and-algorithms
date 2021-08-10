'use strict';

//Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [];
    let traverse = (node) => {
        res.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return res;
};