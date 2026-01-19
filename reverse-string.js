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

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");
  return sorted1 === sorted2;
}
console.log(areAnagrams("listen", "silent")); //true
