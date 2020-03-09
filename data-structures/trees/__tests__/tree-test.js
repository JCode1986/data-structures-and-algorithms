'use strict';

const Tree = require('../tree');
const Node = require('../node');

const tree = new Tree.BinaryTree()

describe('Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let expected = tree
    expect(expected).toEqual({ root: null });
  })

  it('Can successfully insert a node value into an empty tree', () => {
    let actual = tree.insert(15)
    let expected = { left: null, right: null, value: 15 }
    expect(expected).toEqual(actual);
  })

  it('Can successfully add a left child and right child to a single root node', () => {
    tree.insert(5)
    tree.insert(20)
    let expected = [tree.root.value, tree.root.left.value, tree.root.right.value]
    let actual = tree.preOrder()
    expect(expected).toEqual(actual);
  })

  it('Can successfully return a collection from a preorder traversal', () => {
    tree.insert(10)
    tree.insert(25)
    tree.insert(5)
    let expected = [15, 5, 10, 20, 25]
    let actual = tree.preOrder()
    expect(expected).toEqual(actual);    
  })

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [5, 10, 15, 20, 25]
    let actual = tree.inOrder()
    expect(expected).toEqual(actual);    
  })

  it('Can successfully return a collection from a postorder traversal', () => {
    tree.insert(6)
    tree.insert(13)
    let expected = [6, 13, 10, 5, 25, 20, 15]
    let actual = tree.postOrder()
    expect(expected).toEqual(actual); 
  })

});