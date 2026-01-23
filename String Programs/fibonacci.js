function fibonacci(n) {
  let a = 0, b = 1, result = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result;
}
