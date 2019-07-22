'use strict';


/**
 * node class
 * with a next and a value
 * @class Node
 */
class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}


/**
 * node stack
 * with a top and stack (array)
 * @class Stack
 */
class Stack {
  constructor(){
    this.top = null;
    this.stack = [];
  }

  /**
   * takes any value as an argument
   * adds a new value to the top of the stack 
   * @param {*} value
   * @returns
   * @memberof Stack
   */
  push(value) {
    this.stack.push(value);
    return this.top = (value);
  }

  /**
   * removes the node from the top of the stack,
   * returns the value
   * @returns
   * @memberof Stack
   */
  pop() {
    if (this.stack === 0) {
      return "underflow";
    }
    let value = this.stack.pop();
    this.top = this.stack[this.stack.length-1];
    return value;
  }

  /**
   * returns the value 
   * located on top of the stack
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.top;
  }
}

/**
 * node queue
 * with array and rear
 * @class Queue
 */
class Queue {
  constructor(){
    this.queue = [];
    this.rear = null;
  }

  /**
   * adds a new value
   * to the back of the queue 
   * @param {*} value
   * @memberof Queue
   */
  enqueue(value) {
    this.queue.push(value);
    return this.rear = value;
  }

  /**
   * removes the value from the front of the queue
   * and returns the value
   * @returns
   * @memberof Queue
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * returns the value located in the front of the queue
   * without removing it from the queue
   * @returns
   * @memberof Queue
   */
    peek() {
    return this.queue[0];
  }
}

let stack = new Stack();
let queue = new Queue();
queue.enqueue('yo');
queue.enqueue('bro');
console.log(queue.peek())

module.exports = { Node, Stack, Queue };