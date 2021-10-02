'use strict';

// Given the head of a singly linked list, return true if it is a palindrome.

// Examples:

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    
    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let i = arr.length - 1;
    curr = head;
    
    while(curr) {
        if(curr.val != arr[i]) { 
            return false
        } else {
            curr = curr.next;
            i--;
        }
    }
    
    return true;
};