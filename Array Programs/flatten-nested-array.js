const nested = [1, [2, [3, 4]], 5];
const simpleFlat = nested.flat(Infinity);

function isEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(simpleFlat);