const array = [18, 13, 12, 14, 16, 13, 15, 14];

function smallestNumber(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort();
  console.log(uniqueArray);
  return uniqueArray[n - 1];
}
console.log(smallestNumber(array, 2));