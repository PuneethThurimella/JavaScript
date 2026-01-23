function nthLargest(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort((a, b) => b - a); //desc
  return uniqueArray[n - 1];
}

function nthLargestNumber(arr, n) {
  let prevMax = Infinity;
  let currentMax;
  for (let count = 0; count < n; count++) {
    currentMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < prevMax && arr[i] > currentMax) {
        currentMax = arr[i];
      }
    }
    if (currentMax === -Infinity) return "No element found";
    prevMax = currentMax;
  }
  return currentMax;
}
console.log(nthLargest([18, 13, 12, 14, 16, 13, 15, 14, 18, 16], 2));
console.log(nthLargestNumber([18, 13, 12, 14, 16, 13, 15, 14, 18, 16], 2));