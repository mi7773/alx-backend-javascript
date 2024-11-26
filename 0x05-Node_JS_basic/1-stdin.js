const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  if (process.stdin.isTTY === true) {
    console.log(`Your name is: ${name}`);
  } else {
    console.log(`Your name is: ${name}`);
  }
  rl.close();
});
