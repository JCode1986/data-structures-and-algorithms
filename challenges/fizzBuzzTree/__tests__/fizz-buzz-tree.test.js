'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const Tree = require('../../../data-structures/trees/tree')

const tree = new Tree.BinaryTree()
console.log(tree)

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

    // it('returns fizbuzz if root is divisible by 3 and 5', () => {
    //     tree.insert(15)
    //     fizzBuzzTree(tree)
    //     let actual = tree.root.value
    //     let expected = "fizbuzz"
    //     expect(expected).toEqual(actual)
    // });
    
    // it('returns fizz and buzz for left and right child of root', () => {
    //     tree.insert(20)
    //     tree.insert(6)
    //     let actual = fizzBuzzTree(tree)
    //     let expected = "fizbuzz"
    //     console.log('what is this', tree.root)
    //     expect(expected).toEqual(actual)
    // });

});


