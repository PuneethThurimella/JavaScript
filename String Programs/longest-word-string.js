function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function LongestWord(str) {
  return str.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest),"");
}

function longestword(str) {
  let longest = "";
  let current = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== " " && i !== str.length) {
      current += str[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
    }
  }
  return longest;
}
