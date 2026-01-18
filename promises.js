/* 1. what is async ?
async is a keyword used before a function to make function asynchronous.
and it always return a promise.

2. what is await ?
await is a keyword that can be used inside async function only.
it pause the execution for promise to be resolved.
async & await combo used to handle promises. */

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 10000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed to fetch"));
  }, 20000);
});

async function getData() {
  try {
    const resOne = await promiseOne;
    console.log('getData:',resOne);
    const resTwo = await promiseTwo;
    console.log('getData:',resTwo);
  } catch (error) {
    console.error('getData:',error);
  }
}

async function getDataParallel() {
  try {
    const [resOne, resTwo] = await Promise.all([promiseOne, promiseTwo]);
    console.log('getDataParallel:', resOne, resTwo);
  } catch (error) {
    console.error('getDataParallel Error:', error);
  }
}

function getResult() {
  promiseOne.then((resOne) => console.log('getResult:',resOne))
  .catch((error) => console.error('getResult:',error))
  promiseTwo.then((resTwo) => console.log('getResult:',resTwo))
  .catch((error) => console.error('getResult:',error));
}

getData();
getDataParallel();
getResult();
