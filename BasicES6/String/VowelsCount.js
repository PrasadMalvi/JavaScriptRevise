function VowelsCount(str) {
  let count = 0;
  let vowels = "AEIOUaeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(VowelsCount("Prasad"));
