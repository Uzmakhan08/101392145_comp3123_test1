//Student id-101392145
//Student name- Uzma Khan

// question1.js

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject("Input is not an array.");
      } else {
        const filteredWords = arr.filter((item) => typeof item === 'string');
        const lowercasedWords = filteredWords.map((word) => word.toLowerCase());
        resolve(lowercasedWords);
      }
    });
  }
  
  
  const mixedArray = [1, 'Apple', 'banana', 'Cherry', 2];
  
  lowerCaseWords(mixedArray)
    .then((result) => {
      console.log("Lowercased words:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  

