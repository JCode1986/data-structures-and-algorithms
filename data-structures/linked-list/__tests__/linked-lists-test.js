'use strict';

const LinkedList = require('../linked-list');

const list = new LinkedList();

describe('Linked Lists', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let actual = { head: null, tail: null };
    expect(list).toEqual(actual);
  })
  it('Can properly insert into the linked list', () => {
    let actual = list.insert('hi');
    let expected = list.head;
    expect(expected).toEqual(actual);
  })
  it('The head property will properly point to the first node in the linked list', () => {
    let next = list.insert('second');
    let head = list.insert('first');
    let expected = [list.head, list.head.next]
    let actual = [head, next]
    expect(expected).toEqual(actual);
  })
  // it('Returns boolean if node\'s value exists in the linked list', () => {
  //   list.insert('hello world')
  //   let expected = true
  //   let actual = list.includes('hello world')
  //   expect(expected).toBe(actual);    
  // })
});
