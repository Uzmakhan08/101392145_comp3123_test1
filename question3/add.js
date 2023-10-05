const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

// 2. Create Log files
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log("Logs directory created.");
}

// Change the current working directory to the new Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text into the file
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(`File created: ${fileName}`);
}
