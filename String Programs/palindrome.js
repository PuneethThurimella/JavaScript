function isPalindrome(string) {
  string = string.toLowerCase();
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  return result === string;
}

function ispalindrome(string) {
  string = string.toLowerCase();
  return string.split("").reverse().join("") === string;
}
console.log(isPalindrome("Madam"));
