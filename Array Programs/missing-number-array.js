function findMissing(arr, n) {
  let total = n * (n + 1) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}
console.log(findMissing([1, 2, 3, 5, 6, 7, 8], 8));
