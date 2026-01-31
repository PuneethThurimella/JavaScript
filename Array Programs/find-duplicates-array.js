function findDuplicates(arr) {
  let dup = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        dup.push(arr[i]);
        break;
      }
    }
  }
  return dup;
}
console.log(findDuplicates([18, 13, 12, 14, 16, 13, 15, 14, 16]));