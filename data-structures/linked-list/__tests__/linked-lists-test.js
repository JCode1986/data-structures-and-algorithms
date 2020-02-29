'use strict';

jest.mock('fs');

const Node = require('../linked-list');
const LinkedList = require('../linked-list');

/* 
Can properly insert multiple nodes into the linked list
Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list */


describe('Linked Lists', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let expected = new LinkedList();
    let actual = { value: undefined, next: undefined }
    expect(expected).toEqual(actual);
  })
  // it('Can properly insert into the linked list', () => {
  //   let list = new LinkedList();
  //   let actual = list.insert('hi')
  //   let expected = list.head.value
  //   console.log(actual)
  //   expect(expected).toEqual(actual);
  // })
  // it('The head property will properly point to the first node in the linked list', () => {
  //   let list = (new LinkedList());
  //   let head = list.insert('first');
  //   let next = list.insert('second');
  //   console.log(head);
  //   // expect(head.next)
  // })
});