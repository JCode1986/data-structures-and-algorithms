'use strict';

//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

//two pointer solution
var isPalindrome = function(x) {
    let s = x.toString();
    if(s.length == 1) return true;
    //compare first element and last element; increment start and decrement end to check for match
    for(let start = 0, end = s.length - 1; start <= end; start++, end--) {
        if(s[start] != s[end]) return false;
    }
    return true;
};