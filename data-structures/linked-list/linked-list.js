'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance
  insert(value) {
    this.head = new Node(value, this.head);
    return this.head;
  };

  // takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value == value){
        return true;
      };
      current = current.next;
    };
    return false;
  };

  // takes in no arguments and returns a string representing all the values in the Linked List
  toString() {
    let current = this.head;
    let str = `Head:`;
    while(current){
      str += `[${current.value}] --> `;
      current = current.next
      };
      str += 'null';
      return str;
    };

    getSize() {
      return this.size
    };

  //which adds a new node with the given value to the end of the list
  append(value) {
    if(!this.head) {
      this.size++;
      return this.insert(value);
    };
    let node = new Node(value);
    let current = this.head;
    while(current) {
      if(current.next == null) {
        current.next = node;
        node.next = null;
        this.tail = node;
      };
      this.size++;
      current = current.next;
    };
    return this.tail;
  };

  //add a new node with the given newValue immediately before the first value node
  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let temp = null
    if(this.includes(value)) {
      while(current) {
        if(current.value == value) {
          temp.next = node
          node.next = current
        } 
        temp = current
        current = current.next;
      }; 
      return this.toString();
    };
    return `Node with value: [${value}] does not exist`
  };

  //add a new node with the given newValue immediately after the first value node
  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let temp = null
    if(this.includes(value)) {
      while(current){
        if(current.value == value) {
          temp = current.next
          current.next = node
          node.next = temp
        };
        current = current.next;
      };
      return this.toString();
    }
    return `Node with value: [${value}] does not exist`
  };


  kthFromEnd(k) { 
    let count =  0;
    let current = this.head;

  while(current.next !== null) {
    current = current.next
    count++;
  } 
  if (k > count) {
    return null;
  }
  let target = count - k;
  current = this.head;
  while(target > 0) {
    current = current.next;
    target--;
  }
  return current.value
  };

  //merge link lists together, alternating nodes starting with param 1 (list1)
  mergeLists(list1, list2) {

  } 
};

module.exports = LinkedList;

