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
