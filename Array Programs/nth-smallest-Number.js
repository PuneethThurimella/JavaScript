function nthSmallest(array, n) {
  if (n > array.length) return "No elements found";
  let uniqueArray = [...new Set(array)].sort();
  console.log(uniqueArray);
  return uniqueArray[n - 1];
}

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