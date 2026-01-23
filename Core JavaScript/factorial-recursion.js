// Recursion is a technique where a function calls itself to solve a problem.
function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1; // recursion
  return n * factorial(n - 1);
}

function Factorial(n) {
  if (n < 0) return "Invalid input";
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
