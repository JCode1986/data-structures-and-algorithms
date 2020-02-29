'use strict';

const Node = require('../stacksAndQueues/node')
const Stack = require('../stacksAndQueues/stack')
const Queue = require('../stacksAndQueues/queue')

class PseudoQueue {
  constructor() {
    this.storage = new Stack;
    this.shuffle = new Stack;
  }

  enqueue(value) {
    if(this.storage.peek() !== null) {
    let temp = null;
    console.log('hi');
    while(this.storage.peek() !== null) {
      temp = this.storage.pop();
      this.shuffle.push(temp)
    }
    this.storage.push(value);
    while(this.shuffle.peek() !== null) {
      temp = this.shuffle.pop();
      this.storage.push(temp);
    }
      this.storage.push(value);
    }
  }
}

let pseudoQueue = new PseudoQueue();
let stack = new Stack();
let queue = new Queue();

pseudoQueue.enqueue('1');
pseudoQueue.enqueue('2');
pseudoQueue.enqueue('3');
pseudoQueue.enqueue('4');

console.log(pseudoQueue);

module.exports = PseudoQueue;
