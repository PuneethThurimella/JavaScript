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

function longestWordIndex(str) {
  let words = str.split(" ");
  let longestIndex = 0;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[longestIndex].length) {
      longestIndex = i;
    }
  }
  return longestIndex;
}

function LongestWord(str) {
  return str.split(" ").reduce((longest, word) => (word.length > longest.length ? word : longest),"");
}
