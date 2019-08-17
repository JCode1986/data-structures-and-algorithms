'use strict';

const Tree = require('../tree');
const Node = require('../node');

describe('Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let expected = new Tree.BinaryTree();
    expect(expected).toEqual({ root: null });
  })

  it('Can successfully instantiate a tree with a single root node', () => {
    let expected = new Tree.BinaryTree('single root node');
    expect(expected).toEqual({ root: 'single root node' });
  })

  it('Can successfully add a left child and right child to a single root node', () => {
   
  })

  it('Can successfully return a collection from a preorder traversal', () => {

  })

  it('Can successfully return a collection from an inorder traversal', () => {

  })

  it('Can successfully return a collection from a postorder traversal', () => {

  })

});