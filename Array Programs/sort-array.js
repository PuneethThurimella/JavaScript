const numbers = [2, 6, 1, 5, 10, 16, 13];
const asc = numbers.sort((a, b) => a - b);
console.log(asc);

const desc = numbers.sort((a, b) => b - a);
console.log(desc);

const normal = numbers.sort();
console.log(normal);
