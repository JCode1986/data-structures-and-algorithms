'use strict';

//Given a string s consists of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

//Examples: 
// Input: s = "Hello World"
// Output: 5

// Input: s = "   fly me   to   the moon  "
// Output: 4

// Input: s = "luffy is still joyboy"
// Output: 6

//Constraints: 
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at most one word in s.

var lengthOfLastWord = function(s) {
    if(s[0] != " " && s.length == 1) return 1;
    let count = 0;
    let isWord = false;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] != " ") {
            isWord = true;
            count++;
        }
        if(count && isWord && (s[i] == " " || i == 0)) return count;
    }
};