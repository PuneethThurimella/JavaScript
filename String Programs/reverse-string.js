function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function reversestring(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString('Puneeth Kumar'));
console.log(reversestring('Puneeth Kumar'));