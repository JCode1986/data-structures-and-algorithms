'use strict';

const Tree = require('../../data-structures/trees/tree');
const Node = require('../../data-structures/trees/node')

let test = new Node('hi')
console.log('sadsadasdasdasdasd', test)

function fizzBuzzTree (tree) {
  let newTree = new Tree.BinaryTree(tree.root)
  let node = tree.root
  if(!node) { 
    return 'Tree has no root value' ; 
  } else {

    //helper function
    function _calculate(value) {
      if(value % 15 === 0) return 'FizzBuzz';
      else if(value % 3 === 0) return 'Fizz';
      else if(value % 5 === 0) return 'Buzz';
      else return value;
    }

    // helper function -- new tree
    function _walk (new_current, old_current) {    
      new_current.value = _calculate(old_current.value);
      if(old_current.left) {
        new_current.left = new Node(old_current.left.value);
        console.log('what is this', new_current.left)
        _walk(new_current.left, old_current.left);
      };
      if(old_current.right) {
        new_current.right = new Node(old_current.right.value);
        _walk(new_current.right, old_current.right);
      };
    };

    _walk(newTree.root, tree.root);
    return newTree
  };
};

module.exports = fizzBuzzTree;



