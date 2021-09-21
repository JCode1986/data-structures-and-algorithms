'use strict';

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Examples:

// Input: s = "leetcode"
// Output: 0

// Input: s = "loveleetcode"
// Output: 2

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    const seen = new Map()
    for (let i = 0; i < s.length; i++) {
        seen.has(s[i]) ? seen.set(s[i], -1) : seen.set(s[i], i)
    }
    for (const value of seen.values()) {
        if (value !== -1) return value
    }
    return -1
};