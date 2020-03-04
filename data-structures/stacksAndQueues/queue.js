'use strict';

/**
 * node queue
 * with array and rear
 * @class Queue
 */
class Queue {
  constructor(){
    this.queue = [];
    this.front = null
    this.rear = null;
  }

  /**
   * adds a new value
   * to the back of the queue 
   * @param {*} value
   * @memberof Queue
   */
  enqueue(value) {
    this.queue.unshift(value);
    return this.front = value;
  }

  /**
   * removes the value from the front of the queue
   * and returns the value
   * @returns
   * @memberof Queue
   */
  dequeue() {
    let value = this.queue.shift();
    this.front = this.queue[0]
    return value
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

module.exports = Queue; 
