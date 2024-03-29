// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

//Examples: 
// Input: root = [4,2,6,1,3]
// Output: 1

// Input: root = [1,0,48,null,null,12,49]
// Output: 1

var getMinimumDifference = function(root) {
    let min = Number.POSITIVE_INFINITY;
    let arr = [];
    let traverse = (node) => {
        if(!node) return;
        traverse(node.left);
        arr.push(node.val);
        traverse(node.right);
    }
    let getMininum = (arr) => {
    	for(let i = 1; i < arr.length; i++) {
      	if(arr[i] - arr[i - 1] < min) min = arr[i] - arr[i - 1];
      }
    } 
    traverse(root);
    getMininum(arr);
    return min;
};