// Event Loop is a mechanism in JS that continuously checks the Call Stack,
// if empty, moves pending tasks from the Microtask and Task Queues to the stack for execution.
// Call Stack(Synchronous code) → Microtask Queue (Promise) → Task Queue (Timers)

console.log("1. Start"); // Call Stack

setTimeout(() => {
  console.log("2. Timeout"); // Task Queue
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise"); // Microtask Queue
});

console.log("4. End"); // Call Stack
