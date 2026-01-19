let value = "Puneeth Kumar";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(value));

function reverseStr(str) {
  // str = str.toLowerCase(); // Palindrome
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
  // return result === str; // Palindrome
}

console.log(reverseStr(value));
