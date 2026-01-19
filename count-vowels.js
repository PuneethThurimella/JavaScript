let string = 'Puneeth Kumar';

function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) { // includes(char)
      count++;
    }
  }
  return count;
}
console.log(countVowels(string));