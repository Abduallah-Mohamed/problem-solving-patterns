/***
 * Given a string s, find the length of the longest substring without repeating characters.
 **===============================================
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 ** ===============================================
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 **================================================
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

//  ! my semi bad solution
// var lengthOfLongestSubstring = function (s) {
//   // s = [...new Set(s.split(""))].join("");
//   // s = [...s].sort().join("");
//   // return s;
//   let maxString = "";
//   let tempString = "";
//   let longest = 0;

//   if (s.length === 1) return 1;

//   for (let char of s) {
//     if (tempString.indexOf(char) !== -1) {
//       if (maxString.length <= tempString.length) {
//         maxString = tempString;
//       }
//       tempString = tempString.replace(s[s.indexOf(char)], "");
//     }
//     tempString += s[s.indexOf(char)];
//     // console.log(s[s.indexOf(char)]);

//     longest = Math.max(tempString.length, maxString.length);
//   }

//   return longest;
// };

// ! solution from leetcode
function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split("").reduce((max, char, index) => {
    // we stored the last seen index of this character in 'map'
    const lastSeenIndex = map[char];
    // if the Left Side pointer of the window is at or before the previous appearance of this character, the window must contain this character.
    const windowContainsCharacter = lastSeenIndex >= left;
    //      we'll move the Left Side pointer to exclude the previous appearance of the character, if necessary.
    left = windowContainsCharacter ? lastSeenIndex + 1 : left;

    //      store the last seen index of this character in 'map'
    map[char] = index;

    //      get the size of the window, accounting for 0-based indexing
    const windowSize = index - left + 1;
    //      return the biggest window size so far
    return Math.max(max, windowSize);
  }, 0);
}

console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("dvdf")); // 3
