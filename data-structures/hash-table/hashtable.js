'use strict';
 
class HashMap {
  constructor(size) {
    this.size = size;
    this.bucket = new Array(size);
  }

  hash(key) {
    return key.split('').reduce( (acc,val) => {
      return acc + val.charCodeAt(0)
    }, 0) * 599 % this.size;
  }

  add(key,value) {
    let hashValue = this.hash(key);
    if(!this.bucket[hashValue]) { this.bucket[hashValue] = []; }
    this.bucket[hashValue].push({[key]:value});
  }

  contains(key) {
    let hashKey = this.hash(key);
    // Is it in the bucket of arrays?
    if(this.bucket[hashKey]) {
      // Search for it in array of objects.
      for(let i=0; i<this.bucket[hashKey].length; i++) {
        if(this.bucket[hashKey][i][key]) { return true;}
      }

      // Checked the array of objects, doesnt exist.
      return false;
    }

    // Not in bucket of arrays, so return false
    else return false;
  }

  get(key) {
    let hashKey = this.hash(key);
    let keyInBucket = this.bucket[hashKey]
    if(keyInBucket) {
      for(let i = 0; i < keyInBucket.length; i++) {
        if(keyInBucket[i].hasOwnProperty(key)) {
          return keyInBucket[i][key]
        }
      }
    } else {
      return `${key} not in hashmap`
    }
  }
}

module.exports = HashMap;