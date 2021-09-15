'use strict';

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
 
// Examples:

// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i <= n ; i++){
      let temp = '';
      
      temp += i % 3 ? '':'Fizz';
      temp += i % 5 ? '':'Buzz';
      if(!temp) temp += i; 
      
      res.push(temp);
    }  
  
    return res;
  };