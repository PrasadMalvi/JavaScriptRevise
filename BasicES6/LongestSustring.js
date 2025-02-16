var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let charIndexMap = {};
  for (let i = 0, j = 0; j < s.length; j++) {
    if (charIndexMap[s[j]] !== undefined) {
      i = Math.max(charIndexMap[s[j]] + 1, i);
    }
    charIndexMap[s[j]] = j;
    maxLength = Math.max(maxLength, j - i + 1);
  }
  return maxLength;
};
