const array = [18, 13, 12, 14, 16, 13, 15, 14, 16];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(array));
