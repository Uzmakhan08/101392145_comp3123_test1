//Student id-101392145
//Student name- Uzma Khan
//question2.js
function resolvedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved successfully");
      }, 500);
    });
  }
  
  function rejectedPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise rejected with an error");
      }, 500);
    });
  }
  
  resolvedPromise()
    .then((result) => {
      console.log("Resolved:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  rejectedPromise()
    .then((result) => {
      
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });
  