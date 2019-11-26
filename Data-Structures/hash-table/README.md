# Hashtables
Implement a hashtable.

## Challenge
Implement a Hashtable with the following methods:

* add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
* get: takes in the key and returns the value from the table.
* contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
* hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
O(1)
an Object of arrays of key value pairs

## API
* `hash(key)` - iterated through every character in string and converts it to an integer
* `add(key, value)` - adds a key value pair into an array (bucket)
* `contains(key)` - returns a boolen if the key in bucket exists
* `get(key)` - returns value if key exists in bucket