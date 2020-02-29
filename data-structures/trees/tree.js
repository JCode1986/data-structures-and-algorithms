'use strict';

let Node = require('./node');

class BinaryTree {
  constructor (root = null) {
    this.root = root;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while(true){
      if(value === current.value){
        return undefined;
      }
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      if(value === current.value) return undefined;
      if(value > current.value){
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
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

  breadth_first() {
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

  find_maximum_value() {
    let maxValue = 0;
    if(this.root !== null) { 
      return 'Tree does not exist';
    };
    let _walk = node => {
      if(node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    }
    _walk(this.root);
    return maxValue;
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
tree.insert(10);
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(11);
tree.insert(15);
tree.find_maximum_value(tree)
// console.log(tree)



module.exports = { BinaryTree, BinarySearchTree, };
