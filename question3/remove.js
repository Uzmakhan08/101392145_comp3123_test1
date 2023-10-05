//Student id-101392145
//Student name- Uzma Khan
//question3.js
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// 1. Remove Log files
if (fs.existsSync(logsDirectory)) {
  const files = fs.readdirSync(logsDirectory);
  console.log("Files to be deleted:", files);

  files.forEach((file) => {
    fs.unlinkSync(path.join(logsDirectory, file));
  });

  fs.rmdirSync(logsDirectory);
} else {
  console.log("Logs directory does not exist.");
}
