function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }
  return count;
}

function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

function firstNonRepeatingChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

let string = 'Puneeth Kumar';
console.log('countVowels:', countVowels(string));
console.log('countCharacters:',countCharacters(string));
console.log('firstNonRepeatingChar:',firstNonRepeatingChar(string));