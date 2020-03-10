'use strict';

const Tree = require('../tree');

const tree = new Tree.BinaryTree()
const bst = new Tree.BinarySearchTree()

describe('Binary Tree and Binary Search Tree', () => {
  
                      //BINARY TREE

  it('Can successfully instantiate an empty binary tree', () => {
    let expected = tree;
    expect(expected).toEqual({ root: null });
  });

  it('Can successfully insert a node value into an empty tree', () => {
    let actual = tree.insert(15);
    let expected = { left: null, right: null, value: 15 };
    expect(expected).toEqual(actual);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    tree.insert(5);
    tree.insert(20);
    let expected = [tree.root.value, tree.root.left.value, tree.root.right.value];
    let actual = tree.preOrder();
    expect(expected).toEqual(actual);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    tree.insert(10);
    tree.insert(25);
    tree.insert(5);
    let expected = [15, 5, 10, 20, 25];
    let actual = tree.preOrder();
    expect(expected).toEqual(actual);    
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [5, 10, 15, 20, 25];
    let actual = tree.inOrder();
    expect(expected).toEqual(actual);    
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    tree.insert(6);
    tree.insert(13);
    let expected = [6, 13, 10, 5, 25, 20, 15];
    let actual = tree.postOrder();
    expect(expected).toEqual(actual); 
  });

  it('Returns message if no root when finding max value', () => {
    let empty_tree = new Tree.BinaryTree();
    let expected = 'No root';
    let actual = empty_tree.find_maximum_value();
    expect(expected).toEqual(actual); 
  });

  it('Returns root\'s value if not left and right nodes', () => {
    let tree_with_root = new Tree.BinaryTree();
    tree_with_root.insert(45);
    let expected = tree_with_root.root.value;
    let actual = tree_with_root.find_maximum_value();
    expect(expected).toEqual(actual); 
  });

  it('Returns maximum value', () => {
    tree.insert(33);
    tree.insert(99);
    let expected = 99;
    let actual = tree.find_maximum_value();
    expect(expected).toEqual(actual); 
  });

                      //BINARY SEARCH TREE

  it('Can successfully instantiate an empty binary search tree', () => {
    let expected = bst;
    expect(expected).toEqual({ root: null });
  });

  it('Can successfully add a single node to binary search tree', () => {
    let actual = bst.add(20);
    let expected = bst.root;
    expect(expected).toEqual(actual);
  });
  
});