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

  it('Returns boolean if node\'s value exists in the linked list', () => {
    let expected = [true, false]
    let actual = [list.includes('first'), list.includes('this will return false')]
    expect(expected).toEqual(actual);    
  })

  it('Returns all node\'s values in the linked list', () => {
    let expected = 'Head:[first] --> [second] --> [hi] --> null'
    let actual = list.toString()
    expect(expected).toBe(actual);    
  })

  it('Can append a node to an empty linked list', () => {
    let empty = new LinkedList()
    let actual = empty.append(1986)
    let expected = empty.head
    expect(expected).toBe(actual);    
  })

  it('Can append a node to the end of a linked list', () => {
    let actual = list.append('Luke')
    let expected = list.tail  
    expect(expected).toBe(actual); 
  })

  it('Return error message if node does not exist for insert before method', () => {
    let actual = list.insertBefore('banana', 23)
    let expected = 'Node with value: [banana] does not exist' 
    expect(expected).toBe(actual); 
  })

  it('Return error message if node does not exist for insert after method', () => {
    let actual = list.insertAfter('orange', 999)
    let expected = 'Node with value: [orange] does not exist' 
    expect(expected).toBe(actual); 
  })
  
  it('Can insert before an existing specified node in the linked list', () => {
    let actual = list.insertBefore('hi', 23)
    let expected = 'Head:[first] --> [second] --> [23] --> [hi] --> [Luke] --> null'
    expect(expected).toBe(actual); 
  })

  it('Can insert after an existing specified node in the linked list', () => {
    let actual = list.insertAfter('hi', 'world')
    let expected = 'Head:[first] --> [second] --> [23] --> [hi] --> [world] --> [Luke] --> null'
    expect(expected).toBe(actual); 
  })

});
