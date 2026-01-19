const array = [18, 13, 12, 14, 16, 13, 15, 14];

function smallestNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(smallestNumber(array));

function secondSmallest(arr) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondSmallest(array));

function nthSmallest(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort();
  console.log(uniqueArray);
  return uniqueArray[n - 1];
}
console.log(nthSmallest(array, 2));

function nthSmallestNumber(arr, n) {
  let prevMin = -Infinity;
  let currentMin;
  for (let count = 0; count < n; count++) {
    currentMin = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > prevMin && arr[i] < currentMin) {
        currentMin = arr[i];
      }
    }
    if (currentMin === Infinity) return "No element found";
    prevMin = currentMin;
  }
  return currentMin;
}
console.log(nthSmallestNumber(array, 2));
