'use strict';

const Queue = require('../../data-structures/stacksAndQueues/queue')
let queue = new Queue();

class AnimalShelter {
  constructor() {
    this.dog = new Queue;
    this.cat = new Queue;
  }

  fifoEnqueue(animal) {
    if(animal == 'cat' || animal == 'dog') {
      queue.enqueue(animal.value);
    }
    return animal;
  }

  fifoDequeue(preference) {
    if(preference !== 'cat' || preference !== 'dog') { return null };
    if(preference == 'cat' || preference == 'dog') {
      queue.dequeue(preference.value)
    }
    return preference;
  }
};

module.exports = AnimalShelter;

queue.enqueue('yoyo');
console.log(queue);
let animalShelter = new AnimalShelter;
animalShelter.fifoEnqueue('cat');
console.log(animalShelter)