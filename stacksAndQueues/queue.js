'use strict';

const Node = require('./node.js');

/**
 * node queue
 * with array and rear
 * @class Queue
 */
class Queue {
  constructor(){
    this.rear = null;
    this.front = null;
  }

  /**
   * adds a new node
   * to the back of the queue 
   * @param {*} value
   * @memberof Queue
   */
  enqueue(...values) {
  if(values[0] === undefined) return 'needs at least one argument';
  let entry = [...values];
  entry.forEach( value => {
    let node = new Node;
    node.value = value;
    if(!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  });
  }
  

  /**
   * removes the value from the front of the queue
   * and returns the value
   * @returns
   * @memberof Queue
   */
  dequeue() {
    let node = this.front;
    this.front = node.next
    if (this.front === null) {
      this.rear = null; 
      return node.value
    }
  }

  /**
   * returns the value located in the front of the queue
   * without removing it from the queue
   * @returns
   * @memberof Queue
   */
    peek() {
    return this.front.value;
  }
}

module.exports = Queue;

let queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.dequeue()
// console.log(queue.peek())
// console.log(queue);