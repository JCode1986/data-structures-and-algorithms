'use strict';

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    var current = head;
     
     while(current) {
         if(current.next !== null && current.val == current.next.val) {
             current.next = current.next.next;
         } else {
             current = current.next;
         }
     }
     
     return head;
 };