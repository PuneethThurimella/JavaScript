const array = [18, 13, 12, 14, 16, 13, 15, 14];

function largestNumber(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort((a,b) => b-a); //desc
  console.log(uniqueArray);
  return uniqueArray[n - 1];
}
console.log(largestNumber(array, 2));

function largestNumberInArray(arr, n) {
  if (n > arr.length) return "No elements found";
  
}
