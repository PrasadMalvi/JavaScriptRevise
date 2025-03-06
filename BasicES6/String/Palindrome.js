function Palindrome(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result == str) {
    console.log("String is Palindrome");
  } else {
    console.log("String is Not Palindrome");
  }
}

Palindrome("MadaM");
