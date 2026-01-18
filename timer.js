const interval = setInterval(() => {
  console.log("Repeating...");
}, 2000);

const timeOut = setTimeout(() => {
  console.log("One time...");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
  clearTimeout(timeOut);
}, 10000);
