'use strict';

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Examples:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]:

// Input: l1 = [], l2 = []
// Output: []

// Input: l1 = [], l2 = [0]
// Output: [0]


var mergeTwoLists = function(l1, l2) {
    let result = null;

    if(l1 == null) return l2; 
    if(l2 == null) return l1;
    
    result = (l1.val <= l2.val) ? l1 : l2;
    result.next = (l1.val <= l2.val) ?  mergeTwoLists(l1.next, l2) : mergeTwoLists(l1, l2.next);

    return result;
    
};