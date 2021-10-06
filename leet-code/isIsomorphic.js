'use strict';

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Examples:

// Input: s = "egg", t = "add"
// Output: true

// Input: s = "foo", t = "bar"
// Output: false

// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function(s, t) {
    const map = new Map();
    const set = new Set();
    for(let i = 0;i < s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) !== t[i] || !map.has(s[i]) && set.has(t[i])) return false;
        map.set(s[i],t[i]);
        set.add(t[i]);
    }
    return true;
};