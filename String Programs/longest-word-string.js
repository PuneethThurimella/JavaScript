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

let string = "Puneeth Kuamr Thurimella Automation Playwright";
console.log(longestWord(string));
