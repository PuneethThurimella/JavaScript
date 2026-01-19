const numbers = [2, 6, 1, 5, 10, 16, 13];
const asc = numbers.sort((a, b) => a - b);
console.log(asc);

const desc = numbers.sort((a, b) => b - a);
console.log(desc);

const normal = numbers.sort();
console.log(normal);

// Sort Array Without Using sort()
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(numbers));