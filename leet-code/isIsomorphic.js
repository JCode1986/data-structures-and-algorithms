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
    let same = true;
    if(s.length != t.length) return false;
    let s1 = new Map();
    let s2 = new Map();
    
    for(let i = 0; i < s.length; i++) {
        !s1.get(s[i]) ? s1.set(s[i], i) : s1.set(s[i], i); 
        !s2.get(t[i]) ? s2.set(t[i], i) : s2.set(t[i], i); 
    }
    
    if(s1.size != s2.size) return false;
    
    let v1 = s1.values();
    let v2 = s2.values();
    
    for(let i = 0; i < s1.size; i++) {
        if(v1[i] != v2[i]) return false;
    }
    
    return true;
};