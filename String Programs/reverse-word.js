function reverseWord(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function reverseEachWord(sentence) {
  let result = "";
  let word = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      for (let j = word.length - 1; j >= 0; j--) {
        result = result + word[j];
      }
      result = result + " ";
      word = "";
    } else {
      word = word + sentence[i];
    }
  }
  return result.trim();
}
let sentence = "Playwright automation is powerful";
console.log(reverseWord(sentence));
console.log(reverseEachWord(sentence));
