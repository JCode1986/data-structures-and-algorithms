'use strict';

const Queue = require('../../data-structures/stacksAndQueues/queue')
let queue = new Queue();

class AnimalShelter {
  constructor() {
    this.dog = new Queue;
    this.cat = new Queue;
    this.other = new Queue;
  }

  fifoEnqueue(animal) {
    let { species } = animal
    if(species == 'cat') { 
      this.cat.enqueue(animal)
    } 
    if(species == 'dog') {
      this.dog.enqueue(animal);
    } else {
      this.other.enqueue(animal)
    }   
  }

  fifoDequeue(preference) {
    let { species } = preference
    if(species !== 'cat' || species !== 'dog') this.other.dequeue();
    species == 'cat' ? this.cat.dequeue() : this.dog.dequeue();
    return preference
  };
};

module.exports = AnimalShelter;
