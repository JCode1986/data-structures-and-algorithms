'use strict';

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Examples:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    let firsWord = strs[0];
    let firstStrLen = firsWord.length;
	// Initiate the default result
    let result = "";
    for(i = 1; i <= firstStrLen; i++) {
        let temp = firsWord.substring(0,i);
		// Break when find best match
        if(!strs.every(str => str.substring(0,i) == temp)) break;
        result = temp;
    }
    return result;     
};