const array = [18, 13, 12, 14, 16, 13, 15, 14, 16];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(array));

function removeDuplicatesInArray(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) { // indexOf(arr[i]) === -1
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicatesInArray(array));

