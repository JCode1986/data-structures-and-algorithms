'use strict';

const queueAndStacks = require('../stacksAndQueues/stacks-and-queues')



class PseudoQueue {
  constructor() {
    this.storage = new queueAndStacks.Stack();
    this.shuffle = new queueAndStacks.Stack();
  }

  enqueue(value) {
    console.log(this.storage)
    if(this.storage.peek() !== null) {
    let temp = null;
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


module.exports = PseudoQueue;

let pseudoQueue = new PseudoQueue();
console.log(pseudoQueue.enqueue('orange'))