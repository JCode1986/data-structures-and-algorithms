'use strict';

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance
  insert(value) {
    this.head = new Node(value, this.head)
  };

  // takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
  includes(value) {
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
  toString() {
    let current = this.head;
    while(current !== null){
      current = current.next;
      return current.value.toString();
      }
    }

    //which adds a new node with the given value to the end of the list
    append(value) {
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
    };

    //add a new node with the given newValue immediately before the first value node
    insertBefore(value, newVal) {
      let node = new Node(newVal);
      let current = this.head;
      while(current.next){
        if(current.next.value == value) {
          node.next = current.next; 
          current = node;
        }
        current = current.next;
      } 
    };

    //add a new node with the given newValue immediately after the first value node
    insertAfter(value, newVal) {
      let node = new Node(newVal);
      let current = this.head;
      while(current.next){
        if(current.value == value) {
          node = current.next; 
          current = node;
        }
        current = current.next;
      } 
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
    // let zippedList = new LinkedList();
    // let currentOne = list1.head;
    // let currentTwo = list2.head;
    // let countOne = 0;
    // let countTwo = 0;
    // while (currentOne !== null) {
    //   countOne++;
    //   currentOne = currentOne.next;
    // }
    // while (currentTwo !== null) {
    //   countTwo++;
    //   currentTwo = currentTwo.next;
    // }
    // currentOne = list1.head;
    // currentTwo = list2.head;
    // if (countOne >= countTwo) {
    //   while (currentOne !== null) {
    //     let nextOne = currentOne.next;
    //     let nextTwo = currentTwo.next;
    //     currentOne.next = currentTwo.value;
    //     zippedList.append(currentOne);
    //     currentTwo.next = nextOne;
    //     zippedList.append(currentTwo);
    //     currentOne = nextOne;
    //     currentTwo = nextTwo;
    //   }
    // } else{
    //   while (currentOne !== null || currentTwo !== null){
    //     let nextOne = currentOne.next;
    //     let nextTwo = currentTwo.next;
    //     currentTwo.next = currentOne.value;
    //     zippedList.append(currentTwo);
    //     currentOne.next = nextTwo;
    //     zippedList.append(currentOne);
    //     currentOne = nextOne;
    //     currentTwo = nextTwo;
    //   }}
  } 
};

module.exports = LinkedList;
module.exports = Node;
