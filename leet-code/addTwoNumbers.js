'use strict';

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Examples:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

//brute force
var addTwoNumbers = function(l1, l2) {
    
    let c1 = l1;
    let c2 = l2;
    let head = new ListNode();
    let ans = head;
    let arr1 = [];
    let arr2 = [];
    
    while(c1) {
        arr1.push(c1.val);
        c1 = c1.next;
    }
    
    while(c2) {
        arr2.push(c2.val);
        c2 = c2.next;
    }
    
    let revSum1 = BigInt(arr1.reverse().join(''))
    let revSum2 = BigInt(arr2.reverse().join(''))
    let res = (revSum1 + revSum2).toString()
    let len = res.length;
    
    while(len) {
        ans.next = new ListNode(BigInt(res[len - 1]));
        ans = ans.next;
        len--;
    }
    
    return head.next;

};