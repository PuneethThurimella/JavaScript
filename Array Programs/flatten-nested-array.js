const nested = [1, [2, [3, 4]], 5];
const simpleFlat = nested.flat(Infinity);
console.log(simpleFlat);