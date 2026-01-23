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
function findduplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return [...duplicates];
}
console.log(findduplicates([18, 13, 12, 14, 16, 13, 15, 14, 16]));