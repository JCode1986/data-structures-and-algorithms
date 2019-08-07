'use strict';

require('./node');

class BinaryTree {
  constructor (root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    }
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    }
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      results.push(node.value);
    }
    _walk(this.root);
    return results;
  }

  leveOrder() {
    let results = [];
    let nodeQueue = [];
    nodeQueue.push(this.root);
    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {nodeQueue.push(current.left); }
      if(current.right) {nodeQueue.push(current.right); }
    }
    return results;
  }

};

class BinarySearchTree {
  constructor (root = null) {
    this.root = root;
  }
  
  add(value) {
    let node = this.root
    if(!node) {
      this.root = new Node(value);
      return;
    } else {
      let searchTree = function(value) {
        if(value < node.value) {
          if(!node.left) {
            node.left = new Node(value);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
          } else if(data > node.value) {
            if(!node.right) {
              node.right = new Node(value);
              return;
            } else if(node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if(value === current.value) {
        return true;
      }
      if(value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  
};

let tree = new BinaryTree();

module.exports = { BinaryTree, BinarySearchTree, };