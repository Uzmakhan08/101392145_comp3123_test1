// es6-features.js

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
  
  module.exports = lowerCaseWords;
  