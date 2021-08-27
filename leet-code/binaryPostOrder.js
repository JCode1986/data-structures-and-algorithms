// Given the root of a binary tree, return the postorder traversal of its nodes' values.

//Examples: 

// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]


// Recursive Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
var postorderTraversal = function(root) {
    let res = [];
    walk(root);
    return res;
    
    function walk(node) {
        if (!node) return;
        walk(node.left);
        walk(node.right);
        res.push(node.val);
    }
};

// Iterative Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else if (node.right) {
            stack.push(node.right);
            node.right = null;
        }
        else res.push(stack.pop().val);
    }
    return res;
};