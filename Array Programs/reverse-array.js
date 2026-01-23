function reverseArray(arr) {
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++; j--;
  }
  return arr;
}
function reversearray(arr) {
  return arr.slice().reverse(); // prevents mutating original array
}

console.log(reverseArray([2,4,12,14]));