function isanagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");
  return sorted1 === sorted2;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let i = 0; i < str1.length; i++) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!count[str2[i]]) return false;
    count[str2[i]]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent"));
