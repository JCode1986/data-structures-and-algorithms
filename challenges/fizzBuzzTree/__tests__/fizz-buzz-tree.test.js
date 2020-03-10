'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const Tree = require('../../../data-structures/trees/tree')

const tree = new Tree.BinaryTree()

describe('fizz-buzz-tree', () => {
    
    it('can instantiate an empty tree', () => {
        let actual = tree
        let expected = {"root": null}
        expect(expected).toEqual(actual)
    });

    it('returns message if no root value', () => {
        let actual = fizzBuzzTree(tree) 
        let expected = "Tree has no root value"
        expect(expected).toEqual(actual)
    });

    it('returns fizbuzz if root is divisible by 3 and 5', () => {
        tree.insert(15)
        fizzBuzzTree(tree)
        let actual = tree.root.value
        let expected = "FizzBuzz"
        console.log('poop',tree.preOrder())
        expect(expected).toEqual(actual)
    });

    it('returns fizz if root is divisible by 3', () => {
        let tree1 = new Tree.BinaryTree()
        tree1.insert(3)
        fizzBuzzTree(tree1)
        let actual = tree1.root.value
        let expected = "Fizz"
        expect(expected).toEqual(actual)
    });

    it('returns buzz if root is divisible by 5', () => {
        let tree2 = new Tree.BinaryTree()
        tree2.insert(10)
        fizzBuzzTree(tree2)
        let actual = tree2.root.value
        let expected = "Buzz"
        expect(expected).toEqual(actual)
    });

    it('returns value if root is not divisible by 3, 5, or 3 & 5', () => {
        let tree3 = new Tree.BinaryTree()
        tree3.insert(11)
        fizzBuzzTree(tree3)
        let actual = tree3.root.value
        let expected = 11
        expect(expected).toEqual(actual)
    });
    
    // it('returns fizz and buzz for left and right child of root', () => {
    //     tree.insert(20)
    //     tree.insert(6)
    //     tree.insert(23)
    //     tree.insert(2)
    //     fizzBuzzTree(tree)
    //     console.log(tree.preOrder())
    //     let actual = [tree.root.value, tree.root.left.value]
    //     let expected = "fizbuzz"
    //     expect(expected).toEqual(actual)
    // });

});


