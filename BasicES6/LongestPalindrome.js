var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // Odd length palindrome
    expandAroundCenter(i, i + 1); // Even length palindrome
  }

  return s.substring(start, start + maxLength);
};
