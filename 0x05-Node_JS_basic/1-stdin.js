const readline = require('readline');

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}).question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
