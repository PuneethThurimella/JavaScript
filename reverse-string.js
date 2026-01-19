let value = "Puneeth Kumar";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(value));

function reverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log(reverseStr(value));
