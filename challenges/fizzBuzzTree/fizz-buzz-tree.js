'use strict';

const Tree = require('../../data-structures/trees/tree')

function fizzBuzzTree (tree) {
  let newTree = new Tree.BinaryTree()
  console.log('asdsadas', newTree)
  let node = tree.root
  if(!node) { 
    return 'Tree has no root value'  
  }

  //helper function
  function _calculate (value) {
    if(value % 15 === 0) return 'FizzBuzz';
    else if(value % 3 === 0) return 'Fizz';
    else if(value % 5 === 0) return 'Buzz';
    else return value
  }

  //helper function
  function _walk (new_node, old_node) {    
    new_node.value = _calculate(old_node.value);
    if(old_node.left) {
      new_node.left = new Node()
      _walk(new_node.left, old_node.left)
    }
    if(old_node.right) {
      new_node.right = new Node()
      _walk(new_node.right, old_node.right)
    }
  }
  _walk(newTree.root, tree.root)
  return newTree;
}

module.exports = fizzBuzzTree;



