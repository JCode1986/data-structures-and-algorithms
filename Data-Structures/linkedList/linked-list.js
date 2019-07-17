'use strict';

module.exports.Node;
module.exports.linkedList;

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
};

class linkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  // takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance
  insert(value){
    let newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
  };

  // takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
  includes(value){
    let current = this.head;
    while(current.next){
      current = current.next;
      if(current.value == value){
        return true;
      }
    }
    return false;
  };

  // takes in no arguments and returns a string representing all the values in the Linked List
  toString(){
    let current = this.head;
    while(current !== null){
      current = current.next;
      return current.value.toString();
      }
    }

    append(value){
      if(!this.head) {
        this.head = new Node(value)
        return;
      }
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = new Node(value)
      this.tail = current.next;
    }

    insertBefore(value, newVal){
      //add a new node with the given newValue immediately before the first value node
    }

    insertAfter(value, newVal){
      //add a new node with the given newValue immediately after the first value node
    }

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
  }
};


let list = new linkedList();
console.log(list);
list.insert('foo');
list.insert('bar');
list.insert('hello');
list.insert('yo');
list.insert('hi');
list.append(`what's up`);
console.log(list);
console.log(list.includes('foo'));
console.log(list.includes('fooooo'));
console.log(list.toString());
console.log(list.kthFromEnd(3));