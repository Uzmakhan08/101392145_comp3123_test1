// Import callbacks.js to use its methods
const { delayedSuccess, delayedException } = require('./callbacks.js');

// 1. Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved successfully");
    }, 500);
  });
}

// 2. Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected with an error");
    }, 500);
  });
}

// 3. Call both promises separately and handle the resolved and reject results and then output to the console
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
