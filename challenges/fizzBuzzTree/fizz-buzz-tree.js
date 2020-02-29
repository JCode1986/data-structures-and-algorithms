'use strict';

const node = require('../../data-structures/trees/node')

function fizzBuzzTree(tree) {       
  function walk(node) {  
    if(!node.value === typeof Number) return node.value;       
    if(node.value % 5 === 0 && node.value % 3 === 0) {
      node.value = 'fizbuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'fizz';
    } else {
      return node.value;
    }
    if(node.left) walk(node.left);
    if(node.right) walk(node.right);
  }
  traverse(tree.root)
  return tree;
};

module.exports = fizzBuzzTree;