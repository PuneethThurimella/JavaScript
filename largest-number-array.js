const array = [18, 13, 12, 14, 16, 13, 15, 14, 18, 16];

function largestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largestNumber(array));

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLargest(array));

function nthLargest(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort((a, b) => b - a); //desc
  return uniqueArray[n - 1];
}
console.log(nthLargest(array, 2));

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
console.log(nthLargestNumber(array, 2));
